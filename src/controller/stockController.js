const Stock = require('../database/models/stock')

module.exports = {
    async index(req, res) {
        const stocks = await Stock.findAll()

        return res.json(stocks)
    },

    async store(req, res) {

        //retorna o que recebe
        return res.json(req.body)
    }
}