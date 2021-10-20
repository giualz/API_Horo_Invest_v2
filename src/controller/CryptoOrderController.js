const CryptoOrders = require('../database/models/CryptoOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id: crypto_id } = req.params;
        const { id: user_id, 
            cryptoQuantity:crypto_quantity, 
            cryptoPrice:crypto_price } = req.body;

        const order = await CryptoOrders.create({
            user_id,
            crypto_id,
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