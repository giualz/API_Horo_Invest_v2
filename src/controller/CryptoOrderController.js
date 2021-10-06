const CryptoOrders = require('../database/models/CryptoOrders');

module.exports = {
    async destroy(req, res) {
        const params = req.params
        const order = await CryptoOrders.findOne({
            where: {
                user: parseInt(params.user_id),
                crypto: parseInt(params.id)
            }
        })

        order.destroy()
        res.json('order excluded')
    }
}