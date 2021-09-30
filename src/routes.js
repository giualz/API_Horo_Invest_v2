const express = require('express');
const { stockSchema } = require('./schemas/stocksSchema');
const { idParams } = require('./schemas/generalSchema');
const StockController = require('./controller/StockController');
const CryptoController = require('./controller/CryptoController');
const CurrencyController = require('./controller/CurrencyController');

const routes = express.Router();

routes.get('/stocks', StockController.index);
routes.get('/stocks/:id', [idParams], StockController.show);
routes.post('/stocks/:id', [stockSchema], StockController.store);

routes.get('/cryptos', CryptoController.index);
routes.get('/cryptos/:id', [idParams], CryptoController.show);
routes.post('/cryptos/:id', CryptoController.store);

module.exports = routes