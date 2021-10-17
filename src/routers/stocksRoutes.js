const { idParams } = require('../schemas/generalSchema');
const { stockSchema, stockOrderSchema } = require('../schemas/stockSchema');
const StockController = require('../controller/StockController');
const StockOrderController = require('../controller/StockOrderController');

module.exports = (routes) => {

    routes.get(
        '/stocks',
        StockController.index
    );

    routes.get(
        '/stocks/:id',
        [idParams],
        StockController.show
    );

    routes.post(
        '/stocks/:id',
        [stockSchema],
        StockController.store
    );

    routes.post(
        '/stocks/:id/order',
        [stockOrderSchema],
        StockOrderController.createOrder
    );

    //from relation - user
    //:user = token
    routes.delete(
        '/:user/orders/stocks/:id/delete',
        [idParams],
        StockOrderController.destroyOrder
    );

}