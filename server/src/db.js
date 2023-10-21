require("dotenv").config();
const { Sequelize } = require("sequelize");
const DriverModel = require("./models/Driver");
const TeamsModel = require("./models/Teams");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`,
  {
    logging: false,
    native: false,
    port: 5433,
  }
);

DriverModel(sequelize);
TeamsModel(sequelize);

const { Driver, Teams } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Driver.belongsToMany(Teams, { through: "DriverTeams" });
Teams.belongsToMany(Driver, { through: "DriverTeams" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
