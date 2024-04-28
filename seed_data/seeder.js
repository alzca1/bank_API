const { db } = require("../db/database");
const cashpoints = require("./cashpoints.json");
const banks = require("./banks.json");
const users = require("./users.json");
const userAccounts = require("./userAccounts.json");
const accounts = require("./accounts.json");
const cards = require("./cards.json");

const seed = async () => {
  try {
    await db.sequelize.sync({ force: false });

    banks.map(async (bank) => {
      await db.banks.findOrCreate({ where: { name: bank.name } });
    });

    cashpoints.map(async (cashpoint) => {
      await db.cashpoints.findOrCreate({
        where: {
          street: cashpoint.street,
          number: cashpoint.number,
          postCode: cashpoint.postCode,
          bankId: cashpoint.bankId,
        },
      });
    });

    users.map(async (user) => {
      await db.users.findOrCreate({
        where: {
          name: user.name,
          surname: user.surname,
        },
      });
    });

    accounts.map(async (account) => {
      await db.accounts.findOrCreate({
        where: {
          accountNumber: account.accountNumber,
          balance: account.balance,
        },
      });
    });

    userAccounts.map(async (userAccount) => {
      await db.userAccounts.findOrCreate({
        where: {
          UserId: userAccount.UserId,
          AccountId: userAccount.AccountId,
        },
      });
    });

    cards.map(async (card) => {
      await db.cards.findOrCreate({
        where: {
          cardNumber: card.cardNumber,
          cvv: card.cvv,
          expirationDate: card.expirationDate,
          pinNumber: card.pinNumber,
          type: card.type,
          accountId: card.accountId,
          ...(card.creditBalance && { creditBalance: card.creditBalance }),
          ...(card.creditLimit && { creditLimit: card.creditLimit }),
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

seed();
