const CurrencyOrders = require('../database/models/CurrencyOrders');

module.exports = {
    async destroy(req, res) {
        const params = req.params
        const order = await CurrencyOrders.findOne({
            where: {
                user: parseInt(params.user_id),
                currency: parseInt(params.id)
            }
        })

        order.destroy()
        res.json('order excluded')
    }
}