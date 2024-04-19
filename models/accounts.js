const { Datatypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Accounts", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: Datatypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
  });
};
