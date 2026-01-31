const Sequelize = require("sequelize");
const Connection = require("../database/database.js");

const User = connection.define("user", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  cargo: {
    type: Sequelize.STRING(13),
    allowNull: false,
  },
});

User.sync();
module.exports = User;
