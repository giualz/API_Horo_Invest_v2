const { idParams } = require('../schemas/generalSchema');
const { stockSchema, stockOrderSchema } = require('../schemas/stockSchema');
const StockController = require('../controller/StockController');
const StockOrderController = require('../controller/StockOrderController');
const authenticate = require('../middlewares/authenticate');
const adminOnly = require('../middlewares/adminOnly');
const userOnly = require('../middlewares/userOnly');

module.exports = (routes) => {
    //listar todas as ações true
    //devolve valores vindos da api
    // OK
    routes.get(
        '/stocks',
        [authenticate],
        StockController.index
    );

    routes.get(
        '/stocks/:id',
        [userOnly, idParams],
        StockOrderController.show
    ); 

    //cadastro de stock
    routes.post(
        '/stocks/store',
        [adminOnly, stockSchema],
        StockController.store
    );

    //esperar array
    routes.post(
        '/stocks/:id/order',
        [userOnly, stockOrderSchema],
        StockOrderController.createOrder
    );

    //from relation - user
    //:user = token
    routes.delete(
        '/user/orders/stocks/:id/delete',
        [userOnly, idParams],
        StockOrderController.destroyOrder
    );

}