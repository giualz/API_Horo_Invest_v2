const Stock = require('../database/models/stock')

module.exports = {
    async index(req, res) {
        const stocks = await Stock.findAll()

        return res.json(stocks)
    }
}