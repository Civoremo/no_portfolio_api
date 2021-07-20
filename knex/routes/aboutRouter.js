/** @format */

const { express } = require("../../api/configMW");
const { protected } = require("../middleware/protectedMW");

const aboutDB = require("../helpers/aboutDB");
const router = express.router();

router.post("/section/register", protected, (req, res) => {
  const info = req.body;

  aboutDB
    .registerAbout(info)
    .then(result => {
      console.log("about section create", result);
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "About section creation failed." });
    });
});

router.put("/section/update", protected, (req, res) => {
  const info = req.body;

  aboutDB
    .updateAbout(info)
    .then(result => {
      console.log("about section update", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Aboust section update failed." });
    });
});

router.delete("/section/delete", protected, (req, res) => {
  const info = req.body;

  aboutDB
    .deleteAbout(info)
    .then(result => {
      console.log("about section delete", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "About section delete failed." });
    });
});

module.exports = router;
