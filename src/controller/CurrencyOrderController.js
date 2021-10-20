const CurrencyOrders = require('../database/models/CurrencyOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id: currency_id } = req.params;
        const { id: user_id,
            currencyQuantity: currency_quantity,
            currencyPrice: currency_price } = req.body;

        const order = await CurrencyOrders.create({
            user_id,
            currency_id,
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