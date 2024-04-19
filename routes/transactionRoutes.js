const express = require("express");
const router = express.Router();

router.get("/withdrawals", (req, res) => {
  res.send("withdrawals transactionroute works well");
});

router.get("/deposits", (req, res) => {
  res.send("deposits transactionroute works well");
});

router.get("/account_transactions", (req, res) => {
  res.send("account_transactions transactionroute works well");
});

module.exports = router;
