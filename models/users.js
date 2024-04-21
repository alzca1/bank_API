const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Users",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
