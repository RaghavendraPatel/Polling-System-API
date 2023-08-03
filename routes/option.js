const express = require("express");
const router = express.Router();

const optionController = require("../controllers/options_controller");

router.delete("/:id/delete", optionController.deleteOption);
router.get("/:id/addVote", optionController.addVote);

model.exports = router;
