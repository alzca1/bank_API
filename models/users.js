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
      ccNumber: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
      pinNumber: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
