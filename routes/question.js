const express = require("express");

const router = express.Router();

const questionController = require("../controllers/questions_controllers");
const optionController = require("../controllers/options_controller");

router.post("/create", questionController.createQuestion);
router.get("/:id", questionController.getQuestion);
router.delete("/:id/delete", questionController.deleteQuestion);

router.post("/:id/addOption", optionController.addOption);

module.exports = router;
