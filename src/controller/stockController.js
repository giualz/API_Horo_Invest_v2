const Stock = require('../database/models/stock')
const { validationResult } = require('express-validator')

module.exports = {
    async index(req, res) {
        const stocks = await Stock.findAll()

        return res.json(stocks)
    },

    async store(req, res) {
        const data = req.body

        try {
            const create = await Stock.create(data)
            return res.json(create)
        } catch (error) {
            console.log(error)
        }

    }
}