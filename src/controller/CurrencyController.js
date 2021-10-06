const Currency = require('../database/models/currencies');
// const { validationResult } = require('express-validator')

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
            res.status(400).json({ error: `Invalid param ${id}` })
        }
        return res.json(currency)
    }
}