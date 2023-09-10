const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const url = process.env.MONGODB || "mongodb://0.0.0.0:27017/polling";

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erroe connecting to the database"));
db.once("open", () => {
  console.log("Connected to Database");
});
