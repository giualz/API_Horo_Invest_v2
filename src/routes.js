const express = require('express');
const { stockSchema } = require('./schemas/stockSchema');
const { cryptoSchema } = require('./schemas/cryptoSchema');
const { currencySchema } = require('./schemas/currencySchema');
const { idParams } = require('./schemas/generalSchema');
const StockController = require('./controller/StockController');
const CryptoController = require('./controller/CryptoController');
const CurrencyController = require('./controller/CurrencyController');
const StockOrderController = require('./controller/StockOrderController');
const CryptoOrderController = require('./controller/CryptoOrderController');
const CurrencyOrderController = require('./controller/CurrencyOrderController');

const routes = express.Router();

routes.get('/stocks', StockController.index);
routes.get('/stocks/:id', [idParams], StockController.show);
routes.post('/stocks/:id', [stockSchema], StockController.store);
//from relation - user
routes.delete('/stocks/:id/order/:user', [idParams], StockOrderController.destroy)

routes.get('/cryptos', CryptoController.index);
routes.get('/cryptos/:id', [idParams], CryptoController.show);
routes.post('/cryptos/:id', [cryptoSchema], CryptoController.store);
routes.delete('/cryptos/:id/order/:user', [idParams], CryptoOrderController.destroy);

routes.get('/currencies', CurrencyController.index);
routes.get('/currencies/:id', [idParams], CurrencyController.show);
routes.post('/currencies/:id', [currencySchema], CurrencyController.store);
routes.delete('/currencies/:id/order/:user', [idParams], CurrencyOrderController.destroy)

module.exports = routes