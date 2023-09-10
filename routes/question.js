const express = require("express");

const router = express.Router();

const questionController = require("../controllers/questions_controllers");
const optionController = require("../controllers/options_controller");

router.post("/create", questionController.create);
router.get("/", questionController.getAllQuestions);
router.get("/:id", questionController.getQuestion);
router.delete("/delete/:id", questionController.destroy);

router.post("/:id/add-option", questionController.addOption);

module.exports = router;
