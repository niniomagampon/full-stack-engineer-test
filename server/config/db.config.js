const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSERNAME,
  process.env.DBPASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
);

