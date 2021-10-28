const { idParams } = require('../schemas/generalSchema');
const { stockSchema, stockOrderSchema } = require('../schemas/stockSchema');
const StockController = require('../controller/StockController');
const StockOrderController = require('../controller/StockOrderController');
const authenticate = require('../middlewares/authenticate');
const adminOnly = require('../middlewares/adminOnly');
const userOnly = require('../middlewares/userOnly');

module.exports = (routes) => {

    routes.get(
        '/stocks',
        [authenticate],
        StockController.index
    );

    routes.get(
        '/stocks/orders',
        [userOnly],
        StockOrderController.show
    );

    routes.post(
        '/stocks/store',
        [adminOnly, stockSchema],
        StockController.store
    );

    routes.post(
        '/stocks/:id/order',
        [userOnly, stockOrderSchema],
        StockOrderController.createOrder
    );

    routes.delete(
        '/user/orders/stocks/:id/delete',
        [userOnly, idParams],
        StockOrderController.destroyOrder
    );
}