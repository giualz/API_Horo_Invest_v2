const Crypto = require('../database/models/crypto');
const errorHandler = require('../config/errorHandler');

module.exports = {
    async index(req, res) {
        const cryptos = await Crypto.findAll()

        return res.json(cryptos)
    },

    async store(req, res) {
        console.log('CHEGOU AQUI')
        const data = req.body 

        

        try {
            const create = await Crypto.create(data)
            console.log('AGORA AQUI')
            return res.json(create)
        } catch (error) {
            console.log(error)
            console.log('OU AQUI')
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
            throw new errorHandler(400, `Invalid param ${id}`)
        }
        return res.json(crypto)
    }
}