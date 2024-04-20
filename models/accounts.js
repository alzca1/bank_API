const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Accounts", {
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
  });
};
