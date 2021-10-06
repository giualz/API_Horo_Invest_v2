const StockOrders = require('../database/models/StockOrders');

module.exports = {
    async destroyOrder(req, res) {
        const params = req.params
        const order = await StockOrders.findOne({
            where: {
                user: parseInt(params.user_id),
                stock: parseInt(params.id)
            }
        })

        order.destroy()
        res.json('order excluded')
    }
}