//orienta o sequelize
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

//configuração de banco
const connection = new Sequelize(dbConfig.development)

module.exports = connection