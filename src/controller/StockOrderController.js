const StockOrders = require('../database/models/StockOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id } = req.params;
        const { stock_quantity, stock_price } = req.body;

        const order = await StockOrders.create({
            stock_quantity,
            stock_price,
        })
    },
    
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