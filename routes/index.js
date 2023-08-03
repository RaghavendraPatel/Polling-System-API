const express = require("express");

const router = express.Router();

router.use("/question", required("./question"));
router.use("/option", require("./option"));

module.exports = router;
