const express = require('express')
const { stockSchema, stockParams } = require('./schemas/stocksSchema')
const StockController = require('./controller/StockController')

const routes = express.Router()

routes.get('/stocks', StockController.index);
routes.get('/stocks/:id', [stockParams], StockController.show)
routes.post('/stocks/:id', [stockSchema], StockController.store)

module.exports = routes