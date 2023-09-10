const express = require("express");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const bodyParser = require("body-parser");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/", require("./routes"));

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error creating server: ${err}`);
    return;
  }
  console.log(`Server running on Port: ${port}`);
});
