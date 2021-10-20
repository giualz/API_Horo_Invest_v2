const Stock = require('../database/models/stock');
const errorHandler = require('../config/errorHandler');

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

    },

    async show(req, res) {
        const { id } = req.params

        //find by primary key
        const stock = await Stock.findByPk(id, {
            include: {
                association: 'users',
                attributes: ['name', 'email'],
                through: {
                    attributes: []
                }
            }
        })
        console.log(stock)
        if (!stock) {
            throw new errorHandler(400, `Invalid param ${id}`)
        }
        return res.json(stock)
    }
}