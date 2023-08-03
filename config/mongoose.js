const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/polling");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erroe connecting to the database"));
db.once("open", () => {
  console.log("Connected to Database");
});
