const express = require('express')
// const { Router } = require('express')
const StockController = require('./controller/StockController')

const routes = express.Router()

routes.get('/stocks', StockController.index);
routes.post('/stocks',[stockSchema] , StockController.store)

module.exports = routes