const Sequelize = require("sequelize");

const sequelize = new Sequelize("c2202_nodejs", "root", "ab123456..", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
