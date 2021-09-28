const express = require('express')
const { stocksSchema } = require('./schemas/stocksSchema')
const StockController = require('./controller/StockController')

const routes = express.Router()

routes.get('/stocks', StockController.index);
routes.post('/stocks', [stocksSchema], StockController.store)

module.exports = routes