const express = require("express");
const port = 8000;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
