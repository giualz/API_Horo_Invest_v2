const { idParams } = require('../schemas/generalSchema');
const { currencySchema, currencyOrderSchema } = require('../schemas/currencySchema');
const CurrencyController = require('../controller/CurrencyController');
const CurrencyOrderController = require('../controller/CurrencyOrderController');

module.exports = (routes) => {

    routes.get(
        '/currencies',
        CurrencyController.index
    );

    routes.get(
        '/currencies/:id',
        [idParams],
        CurrencyController.show
    );

    routes.post(
        '/currencies/:id',
        [currencySchema],
        CurrencyController.store
    );

    routes.post(
        '/currencies/:id/order',
        [currencyOrderSchema],
        CurrencyOrderController.createOrder
    );

    routes.delete(
        '/:user/orders/currencies/:id/delete',
        [idParams],
        CurrencyOrderController.destroyOrder
    );

}