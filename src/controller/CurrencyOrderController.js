const CurrencyOrders = require('../database/models/CurrencyOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id } = req.params;
        const { currency_quantity, currency_price } = req.body;

        const order = await CurrencyOrders.create({
            id,
            currency_quantity,
            currency_price,
        })
    },

    async destroyOrder(req, res) {
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