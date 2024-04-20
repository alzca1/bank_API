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
db.banks = require("../models/banks")(sequelize, Sequelize);
db.cashpoints = require("../models/cashpoints")(sequelize, Sequelize);

db.users.hasMany(db.accounts, {
  as: "account",
  foreignKey: "userId",
});

db.accounts.hasMany(db.cards, {
  as: "card",
  foreignKey: "accountId",
});

db.accounts.hasMany(db.transactions, {
  as: "transaction",
  foreignKey: "accountId",
});

db.accounts.hasMany(db.users, {
  as: "user",
  foreignKey: "accountId",
});

db.cards.hasMany(db.transactions, {
  as: "transaction",
  foreignKey: "cardId",
});

db.transactions.belongsTo(db.cards, {
  as: "card",
  foreignKey: "cardId",
});

db.transactions.belongsTo(db.accounts, {
  as: "account",
  foreignKey: "accountId",
});

db.cards.belongsTo(db.accounts, {
  as: "account",
  foreignKey: "accountId",
});

db.banks.hasMany(db.cashpoints, {
  as: "cashpoint",
  foreignKey: "bankId",
});

db.cashpoints.belongsTo(db.banks, {
  as: "bank",
  foreignKey: "bankId",
});

module.exports = { db };
