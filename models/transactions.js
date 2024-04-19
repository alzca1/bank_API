const { Datatypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Transactions",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: Datatypes.FLOAT,
        allowNull: false,
      },
      type: {
        type: Datatypes.ENUM,
        values: ["deposit", "withdrawal", "transferIN", "transferOUT", "bankFee"],
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
