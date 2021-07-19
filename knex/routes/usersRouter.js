/** @format */

const { express, bcrypt } = require("../../api/configMW");
const { genToken } = require("../middleware/genToken");
const { protected } = require("../middleware/protectedMW");

const userDB = require("../helpers/usersDB");
const router = express.Router();

router.post("/register", (req, res) => {
  const creds = req.body;

  if (creds.password) {
    const hashedPassword = bcrypt.hashSync(creds.password, 14);
    creds.password = hashedPassword;

    userDB
      .registerUser(creds)
      .then(user => {
        res
          .status(201)
          .json({ user, message: "User registration successful." });
      })
      .catch(err => {
        res.status(500).json({ message: "User registration failed." });
      });
  } else {
    res.status(400).json({ message: "Password missing." });
  }
});

router.post("/login", (req, res) => {
  const creds = req.body;

  if (creds.email && creds.password) {
    userDB.loginUser(creds).then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = genToken(user);
        res.status(200).json({ token, user: user.fName });
      } else {
        res.status(404).json({ message: "Invalid login." });
      }
    });
  } else {
    res.status(400).json({ message: "Input fields missing." });
  }
});
