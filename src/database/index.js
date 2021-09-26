//orienta o sequelize
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Stock = require('./models/stock')

//configuração de banco
const connection = new Sequelize(dbConfig.development)

// injeta no banco a configuração
Stock.init(connection)



module.exports = connection