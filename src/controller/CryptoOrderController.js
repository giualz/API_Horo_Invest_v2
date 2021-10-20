const CryptoOrders = require('../database/models/CryptoOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id } = req.params;
        const { crypto_quantity, crypto_price } = req.body;

        const order = await CryptoOrders.create({
            id,
            crypto_quantity,
            crypto_price,
        })
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