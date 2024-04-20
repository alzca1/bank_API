const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.BBDD_NAME,
  process.env.BBDD_USER,
  process.env.BBDD_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync({ force: false });
    console.log("Connection to DB has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

db.users = require("../models/users")(sequelize, Sequelize);
db.accounts = require("../models/accounts")(sequelize, Sequelize);
db.cards = require("../models/cards")(sequelize, Sequelize);
db.transactions = require("../models/transactions")(sequelize, Sequelize);

db.users.hasMany(db.accounts, {
  as: "account",
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.accounts.hasMany(db.cards, {
  as: "card",
  foreignKey: "accountId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.accounts.hasMany(db.transactions, {
  as: "transaction",
  foreignKey: "accountId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.cards.hasMany(db.transactions, {
  as: "transaction",
  foreignKey: "cardId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = { db };
