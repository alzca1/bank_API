const { Datatypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Cards", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cardNumber: {
      type: Datatypes.STRING(16),
      allowNull: false,
    },
    cvv: {
      type: Datatypes.STRING(3),
      allowNull: false,
    },
    expirationDate: {
      type: Datatypes.STRING(5),
      allowNull: false,
    },
    pinNumber: {
      type: Datatypes.STRING(4),
      allowNull: false,
    },
    type: {
      type: Datatypes.ENUM,
      values: ["credit", "debit"],
      allowNull: false,
    },
    creditBalance: {
      type: Datatypes.FLOAT,
      defaultValue: 0,
    },
    creditLimit: {
      type: Datatypes.FLOAT,
      defaultValue: 0,
    },
  });
};
