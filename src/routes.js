const express = require('express');
const { stockSchema, stockOrderSchema } = require('./schemas/stockSchema');
const { cryptoSchema, cryptoOrderSchema } = require('./schemas/cryptoSchema');
const { currencySchema, currencyOrderSchema } = require('./schemas/currencySchema');
const { idParams } = require('./schemas/generalSchema');
const StockController = require('./controller/StockController');
const CryptoController = require('./controller/CryptoController');
const CurrencyController = require('./controller/CurrencyController');
const StockOrderController = require('./controller/StockOrderController');
const CryptoOrderController = require('./controller/CryptoOrderController');
const CurrencyOrderController = require('./controller/CurrencyOrderController');
const AuthController = require('./controller/AuthController')

const routes = express.Router();

routes.post('/login', AuthController.login);

routes.post('/register', AuthController.register);

routes.get('/stocks', StockController.index);
routes.get('/stocks/:id', [idParams], StockController.show);
routes.post('/stocks/:id', [stockSchema], StockController.store); 
routes.post('/stocks/:id/order', [stockOrderSchema], StockOrderController.createOrder);
//from relation - user
//:user = token
routes.delete('/:user/orders/stocks/:id/delete', [idParams], StockOrderController.destroyOrder);

routes.get('/cryptos', CryptoController.index);
routes.get('/cryptos/:id', [idParams], CryptoController.show);
routes.post('/cryptos/:id', [cryptoSchema], CryptoController.store); 
routes.post('/cryptos/:id/order', [cryptoOrderSchema], CryptoOrderController.createOrder);
routes.delete('/:user/orders/cryptos/:id/delete', [idParams], CryptoOrderController.destroyOrder);

routes.get('/currencies', CurrencyController.index);
routes.get('/currencies/:id', [idParams], CurrencyController.show);
routes.post('/currencies/:id', [currencySchema], CurrencyController.store);
routes.post('/currencies/:id/order', [currencyOrderSchema], CurrencyOrderController.createOrder);
routes.delete('/:user/orders/currencies/:id/delete', [idParams], CurrencyOrderController.destroyOrder);

module.exports = routes