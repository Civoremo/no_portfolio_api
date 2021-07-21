/** @format */

const { express } = require("../../api/configMW");
const { protected } = require("../middleware/protectedMW");

const contactDB = require("../helpers/contactDB");
const router = express.Router();

router.get("/info", (req, res) => {
  contactDB
    .getContact()
    .then(result => {
      console.log("contact info", result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get contact info." });
    });
});

router.post("/register", protected, (req, res) => {
  const info = req.body;

  contactDB
    .registerContact(info)
    .then(result => {
      console.log("contact registered", result);
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Contact failed to register." });
    });
});

router.put("/update", protected, (req, res) => {
  const info = req.body;

  contactDB
    .updateContact(info)
    .then(result => {
      console.log("contact updated", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Contact failed to update." });
    });
});

router.delete("/delete", protected, (req, res) => {
  const info = req.body;

  contactDB
    .deleteContact(info)
    .then(result => {
      console.log("contact deleted", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Contact failed to delete." });
    });
});

router.post("/social/register", protected, (req, res) => {
  const info = req.body;

  contactDB
    .registerSocial(info)
    .then(result => {
      console.log("social registered", result);
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Social info failed to register." });
    });
});

router.put("/social/update", protected, (req, res) => {
  const info = req.body;

  contactDB
    .updateSocial(info)
    .then(result => {
      console.log("social updated", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Social info failed to update." });
    });
});

router.delete("/social/delete", protected, (req, res) => {
  const info = req.body;

  contactDB
    .deleteSocial(info)
    .then(result => {
      console.log("social deleted", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Social info failed to delete." });
    });
});

module.exports = router;
