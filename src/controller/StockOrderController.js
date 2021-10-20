const StockOrders = require('../database/models/StockOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id: stock_id } = req.params;
        const { id: user_id,
            stockQuantity: stock_quantity,
            stockPrice: stock_price } = req.body;
        //vai no db, peag as infos do usuario com aquele email,pega o id e faz a ordem

        const order = await StockOrders.create({
            user_id,
            stock_id,
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