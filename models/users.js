const { Datatypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Users",
    {
      name: {
        type: Datatypes.STRING(50),
        allowNull: false,
      },
      surname: {
        type: Datatypes.STRING(100),
      },
      ccNumber: {
        type: Datatypes.STRING(16),
      },
      pinNumber: {
        type: Datatypes.STRING(4),
      },
    },
    { timestamps: false }
  );
};
