const { db } = require("../db/database");
const cashpoints = require("./cashpoints.json");
const banks = require("./banks.json");
const users = require("./users.json");
const userAccounts = require("./userAccounts.json");
const accounts = require("./accounts.json");

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });

    banks.map(async (bank) => {
      console.log("Bank: ", bank.name);
      await db.banks.findOrCreate({ where: { name: bank.name } });
    });

    cashpoints.map(async (cashpoint) => {
      console.log("Cashpoint: ", cashpoint.street);
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
      console.log("User: ", user.name);
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
      console.log("UserAccount: ", userAccount.accountNumber);
      await db.userAccounts.findOrCreate({
        where: {
          UserId: userAccount.UserId,
          AccountId: userAccount.AccountId,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

seed();
