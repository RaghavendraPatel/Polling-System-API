const express = require("express");
const router = express.Router();

const optionController = require("../controllers/options_controller");

router.delete("/delete/:id", optionController.destroy);
router.get("/add-vote/:id", optionController.addVote);

module.exports = router;
