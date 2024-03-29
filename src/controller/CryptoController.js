const Crypto = require('../database/models/crypto');
const cryptoApi = require('../services/cryptoApi');

module.exports = {

    async index(req, res) {
        try {

            const cryptos = await Crypto.findAll({});

            const returnCryptosWithPrices = await Promise.all(cryptos.map(async crypto => {

                const { id, crypto_name, status } = crypto.dataValues;

                const cryptoObject = await cryptoApi.getCryptosApi(crypto_name);

                return {
                    id,
                    cryptoName: crypto_name,
                    cryptoPrice: cryptoObject.cryptoPrice[crypto_name]['USD'],
                    cryptoPriceBefore: cryptoObject.cryptoPriceBefore[crypto_name]['USD'],
                    status
                }
            }));

            return res.status(200).json(returnCryptosWithPrices)

        } catch (error) {

            return res.status(200).json(returnAllCryptos)
        }
    },

    async store(req, res) {
        const data = req.body;

        try {
            await Crypto.create(data)
            return res
                .status(201)
                .json('Crypto added')
        } catch (error) {
            return res
                .status(400)
                .json('Register failed')
        }
    },

    async show(req, res) {
        const { id } = req.params;

        const crypto = await Crypto.findByPk(id, {
            include: {
                association: 'users',
                attributes: ['name', 'email'],
                through: {
                    attributes: []
                }
            }
        });

        if (!crypto) {
            return res
                .status(400)
                .json(`Invalid param ${id}`)
        }
        return res.json(crypto)
    }
}