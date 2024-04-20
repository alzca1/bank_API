const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Cashpoints", {
    street: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    postCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
  });
};
