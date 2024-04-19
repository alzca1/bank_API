const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.BBDD_NAME,
  
  {
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to DB has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
