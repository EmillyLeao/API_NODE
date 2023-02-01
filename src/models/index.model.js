const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Form = require('./form.model')

const form = Form(sequelize, Sequelize.DataTypes)

const db = {
  form,
  sequelize
}

module.exports = db
