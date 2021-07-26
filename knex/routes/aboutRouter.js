/** @format */

const { express } = require("../../api/configMW");
const { protected } = require("../middleware/protectedMW");

const aboutDB = require("../helpers/aboutDB");
const router = express.Router();

router.get("/all", (req, res) => {
  aboutDB
    .getAbout()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get abouut info." });
    });
});

router.get("/:id", (req, res) => {
  const info = parseInt(req.params.id);

  aboutDB
    .getAboutById(info)
    .then(result => {
      console.log("about by id", result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get about content by Id." });
    });
});

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

router.post("/content/register", protected, (req, res) => {
  const info = req.body;

  aboutDB
    .registerAboutContent(info)
    .then(result => {
      console.log("about content register", result);
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "About content creation failed." });
    });
});

router.put("/content/update", protected, (req, res) => {
  const info = req.body;

  aboutDB
    .updateAboutContent(info)
    .then(result => {
      console.log("about content update", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "About content update failed." });
    });
});

router.delete("/content/delete", protected, (req, res) => {
  const info = req.body;

  aboutDB
    .updateAboutContent(info)
    .then(result => {
      console.log("about section delete", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "About content delete failed." });
    });
});

module.exports = router;
