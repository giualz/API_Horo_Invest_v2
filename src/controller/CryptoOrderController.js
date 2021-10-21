const jwt = require('jsonwebtoken');
const CryptoOrders = require('../database/models/CryptoOrders');
const errorHandler = require('../config/errorHandler');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id: crypto_id } = req.params;
        const {authorization} = req.headers;

        const token = authorization.split(' ')[1]
        const {
            id: user_id,
            user_type
        } = jwt.decode(token)

        if (user_type !== 1) {
            throw new errorHandler(400, 'Orders may only be sent by users')
        }

        const {
            cryptoQuantity: crypto_quantity,
            cryptoPrice: crypto_price
        } = req.body;

        const order = await CryptoOrders.create({
            user_id,
            crypto_id,
            crypto_quantity,
            crypto_price,
        })
        console.log(order)
    },

    async destroyOrder(req, res) {
        const params = req.params;
        const order = await CryptoOrders.findOne({
            where: {
                user: parseInt(params.user_id),
                crypto: parseInt(params.id)
            }
        });

        order.destroy();
        res.json('order excluded')
    }
}