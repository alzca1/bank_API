require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("main route works well");
});

app.get("/transactions", (req, res) => {
  res.send("transactions route works well");
});

app.post("/withdrawals", (req, res) => {
  res.send("withdrawals route works well");
});

app.post("/deposits", (req, res) => {
  res.send("deposits route works well");
});

app.post("/transfers", (req, res) => {
  res.send("transfers route works well");
});

app.post("/activations", (req, res) => {
  res.send("activations route works well");
});

app.put("/pinchanges", (req, res) => {
  res.send("balances route works well");
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
