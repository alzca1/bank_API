const { Datatypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Users",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.STRING(50),
        allowNull: false,
      },
      surname: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      ccNumber: {
        type: Datatypes.STRING(16),
        allowNull: false,
      },
      pinNumber: {
        type: Datatypes.STRING(4),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
