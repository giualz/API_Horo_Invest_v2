
//YET TO BE IMPLEMENTED

const Currency = require('../database/models/currencies');

module.exports = {
    async index(req, res) {
        const currencies = await Currency.findAll();

        return res.json(currencies)
    },

    async store(req, res) {
        const data = req.body

        try {
            await Currency.create(data)
            return res
                .status(200)
                .json('Currency added')
        } catch (error) {
            return res
                .status(400)
                .json('Register failed')
        }
    },

    async show(req, res) {
        const { id } = req.params;

        const currency = await Currency.findByPk(id, {
            include: [{
                association: 'users',
                attributes: ['name', 'email'],
                through: {
                    attributes: []
                }
            }]
        });

        if (!currency) {
            return res
                .status(400)
                .json(`Invalid param ${id}`)
        }
        return res.json(currency)
    }
}