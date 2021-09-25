const express = require('express')
// const { Router } = require('express')
const stockController = require('./controller/stockController')

const routes = express.Router()

routes.get('/stocks', stockController.index)

module.exports = routes