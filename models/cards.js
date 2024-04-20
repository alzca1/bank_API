const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Cards", {
    cardNumber: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    cvv: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    pinNumber: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["credit", "debit"],
      allowNull: false,
    },
    creditBalance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    creditLimit: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  });
};
