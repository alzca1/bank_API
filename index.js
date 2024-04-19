require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const { db } = require("./db/database");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("main route works well");
});

app.use("/transactions", require("./routes/transactionRoutes"));
app.use("/withdrawals", require("./routes/withdrawalRoutes"));
app.use("/deposits", require("./routes/depositRoutes"));
app.use("/transfers", require("./routes/transferRoutes"));
app.use("/activations", require("./routes/activationRoutes"));
app.use("/pinchanges", require("./routes/pinChangeRoutes"));

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
