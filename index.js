require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("main route works well");
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
