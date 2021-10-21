const { idParams } = require('../schemas/generalSchema');
const { currencySchema, currencyOrderSchema } = require('../schemas/currencySchema');
const CurrencyController = require('../controller/CurrencyController');
const CurrencyOrderController = require('../controller/CurrencyOrderController');
const authenticate = require('../middlewares/authenticate');
const adminOnly = require('../middlewares/adminOnly');
const userOnly = require('../middlewares/userOnly');

module.exports = (routes) => {

    routes.get(
        '/currencies',
        [authenticate],
        CurrencyController.index
    );

    routes.get(
        '/currencies/:id',
        [authenticate, idParams],
        CurrencyController.show
    );

    routes.post(
        '/currencies/:id',
        [adminOnly, currencySchema],
        CurrencyController.store
    );

    routes.post(
        '/currencies/:id/order',
        [authenticate, currencyOrderSchema],
        CurrencyOrderController.createOrder
    );

    routes.delete(
        '/:user/orders/currencies/:id/delete',
        [userOnly, idParams],
        CurrencyOrderController.destroyOrder
    );

}