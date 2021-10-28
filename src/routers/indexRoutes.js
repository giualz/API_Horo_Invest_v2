const express = require('express');
const authRoutes = require('./authRoutes');
const cryptosRoutes = require('./cryptosRoutes');
const currenciesRoutes = require('./currenciesRoutes');
const stocksRoutes = require('./stocksRoutes');
const userRoutes = require('./userRoutes');

const routes = express.Router();

module.exports = (app) => {

    app.use(routes);

    authRoutes(routes);

    cryptosRoutes(routes);

    currenciesRoutes(routes);

    stocksRoutes(routes);

    userRoutes(routes);

}