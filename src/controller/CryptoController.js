const Crypto = require('../database/models/crypto');
// const errorHandler = require('../config/errorHandler');

module.exports = {
    async index(req, res) {
        const cryptos = await Crypto.findAll()

        return res.json(cryptos) 
    },

    async store(req, res) {
        const data = req.body

        try {
            await Crypto.create(data)
            return res
                .status(200)
                .json('Crypto added')
        } catch (error) {
            return res
                .status(400)
                .json('Register failed')
        }

    },

    async show(req, res) {
        const { id } = req.params

        //find by primary key
        const crypto = await Crypto.findByPk(id, {
            include: {
                association: 'users',
                attributes: ['name', 'email'],
                through: {
                    attributes: []
                }
            }
        })
        // console.log(crypto)
        if (!crypto) {
            return res
                .status(400)
                .json(`Invalid param ${id}`)
        }
        return res.json(crypto)
    }
}