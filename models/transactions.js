const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Transactions",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["deposit", "withdrawal", "transferIN", "transferOUT", "bankFee"],
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
