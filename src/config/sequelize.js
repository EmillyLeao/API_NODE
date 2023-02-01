const Sequelize = require('sequelize')
const configDb = require('./configDB')

const sequelize = new Sequelize(configDb)

module.exports = sequelize