const jwt = require('jsonwebtoken');
const StockOrders = require('../database/models/stockOrders');

module.exports = {

    async show(req, res) {
        const { id } = req.params;

        try {
            const stocksList = await StockOrders.findAll({
                where: {
                    user_id: id
                }
            }
            );

            res.status(200).json(stocksList)

        } catch (error) {
            res.status(400).json('No orders found')
        }
    },

    async createOrder(req, res) {


        const { id: stock_id } = req.params;
        const { authorization } = req.headers;

        const token = authorization.split(' ')[1];
        const {
            id: user_id,
            user_type
        } = jwt.decode(token);

        if (user_type !== 2) {
            return res
                .status(401)
                .json('Orders may only be sent by users')
        }

        const {
            stock_quantity,
            stock_price
        } = req.body;

        try {

            await StockOrders.create({
                user_id,
                stock_id: Number(stock_id),
                stock_quantity: Number(stock_quantity),
                stock_price: Number(stock_price),
            });

            return res
                .status(201)
                .json('Order created')

        } catch (error) {
            return res
                .status(400)
                .json('Order failed')
        }
    },

    async destroyOrder(req, res) {

        const { id } = req.params;
        const { authorization } = req.headers;

        const token = authorization.split(' ')[1];
        const {
            id: user_id,
            user_type
        } = jwt.decode(token);

        if (user_type !== 2) {
            return res
                .status(401)
                .json('Deletion may only be done by users')
        }

        try {
            const order = await StockOrders.findOne({
                where: {
                    stock_id: id,
                }
            });
            order.destroy();
            res.status(200).json('order excluded')

        } catch (error) {

            res.status(400).json('Order could not be excluded')
        }
    }
}