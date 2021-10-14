//orienta o sequelize
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Stock = require('./models/stock');
const Crypto = require('./models/crypto');
const Currency = require('./models/currencies');
const StockOrders = require('./models/stockOrders');
const CryptoOrders = require('./models/cryptoOrders');
const CurrencyOrders = require('./models/currencyOrders'); 
const Users = require('./models/user');

//configuração de banco
const connection = new Sequelize(dbConfig['development']);

// injeta no banco a
Users.init(connection);
Stock.init(connection);
StockOrders.init(connection);
Crypto.init(connection);
CryptoOrders.init(connection);
Currency.init(connection);
CurrencyOrders.init(connection);

Users.associate(connection.models);
Stock.associate(connection.models);
StockOrders.associate(connection.models);
Crypto.associate(connection.models);
CryptoOrders.associate(connection.models)
Currency.associate(connection.models);
CurrencyOrders.associate(connection.models);

module.exports = connection