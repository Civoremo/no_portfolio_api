/** @format */

const { express } = require("../../api/configMW");
const { protected } = require("../middleware/protectedMW");

const projectDB = require("../helpers/projectDB");
const router = express.Router();

router.get("/all", (req, res) => {
  projectDB
    .getMainProjectsInfo()
    .then(result => {
      console.log("all projects", result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get main projects info." });
    });
});

router.get("/info/:id", (req, res) => {
  const info = parseInt(req.params.id);

  projectDB
    .getDetailedProjectInfo(info)
    .then(result => {
      console.log("project details", result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project detailed info." });
    });
});

router.post("/register", protected, (req, res) => {
  const info = req.body;

  projectDB
    .registerProject(info)
    .then(result => {
      console.log("project registered", result);
      res.status(201).json(result[0]);
    })
    .catch(err => {
      res.status(500).json({ message: "Project creation failed." });
    });
});

router.put("/update", protected, (req, res) => {
  const info = req.body;

  projectDB
    .updateProject(info)
    .then(result => {
      console.log("project updated", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      // console.log("something went wrong with update");
      res.status(500).json({ message: "Project failed to update." });
    });
});

router.delete("/delete", protected, (req, res) => {
  const info = req.body;

  projectDB
    .deleteProject(info)
    .then(result => {
      console.log("project deleted", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Project failed to delete." });
    });
});

router.post("/content/register", protected, (req, res) => {
  const info = req.body;

  projectDB
    .registerProjectInfo(info)
    .then(result => {
      console.log("project content registered", result);
      res.status(201).json(1);
    })
    .catch(err => {
      res.status(500).json({ message: "Project content failed to register." });
    });
});

router.put("/content/update", protected, (req, res) => {
  const info = req.body;

  projectDB
    .updateProjectInfo(info)
    .then(result => {
      console.log("project content updated", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Project content failed to update." });
    });
});

router.delete("/content/delete", protected, (req, res) => {
  const info = req.body;

  projectDB
    .deleteProjectInfo(info)
    .then(result => {
      console.log("project content deleted", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Project content failed to delete." });
    });
});

router.post("/image/register", protected, (req, res) => {
  const info = req.body;

  projectDB
    .registerProjectImage(info)
    .then(result => {
      console.log("project image registered", result);
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Project image failed to register." });
    });
});

router.put("/image/update", protected, (req, res) => {
  const info = req.body;

  projectDB
    .updateProjectImage(info)
    .then(result => {
      console.log("project image updated", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Project image failed to update." });
    });
});

router.delete("/image/delete", protected, (req, res) => {
  const info = req.body;

  projectDB
    .deleteProjectImage(info)
    .then(result => {
      console.log("project image deleted", result);
      res.status(200).json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: "Project image failed to delete." });
    });
});

module.exports = router;
