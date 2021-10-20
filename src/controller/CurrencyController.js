const Currency = require('../database/models/currencies');
const errorHandler = require('../config/errorHandler');

module.exports = {
    async index(req, res) {
        const currencies = await Currency.findAll()

        return res.json(currencies)
    },

    async store(req, res) {
        const data = req.body

        try {
            const create = await Currency.create(data)
            return res.json(create)
        } catch (error) {
            console.log(error)
        }

    },

    async show(req, res) {
        const { id } = req.params

        //find by primary key
        const currency = await Currency.findByPk(id, {
            include: [{
                association: 'users',
                attributes: ['name', 'email'],
                through: {
                    attributes: []
                }
            }]
        })
        console.log(currency)
        if (!currency) {
            throw new errorHandler(400, `Invalid param ${id}`)
        }
        return res.json(currency)
    }
}