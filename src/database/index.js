//orienta o sequelize
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Stock = require('./models/stock');
const Crypto = require('./models/crypto');
const Currency = require('./models/currencies');

//configuração de banco
const connection = new Sequelize(dbConfig['development']);

// injeta no banco a
Stock.init(connection);
Crypto.init(connection);
Currency.init(connection);

Stock.associate(connection.models);
Crypto.associate(connection.models);
Currency.associate(connection.models);

module.exports = connection