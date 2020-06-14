const host = require('./index');
const { database, user, password } = require('./db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
    host: host
});

module.exports = sequelize;