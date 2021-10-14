const { idParams } = require('../schemas/generalSchema');
const { cryptoSchema, cryptoOrderSchema } = require('../schemas/cryptoSchema');
const CryptoController = require('../controller/CryptoController');
const CryptoOrderController = require('../controller/CryptoOrderController');

module.exports = (routes) => {

    routes.get(
        '/cryptos',
        CryptoController.index
    );

    routes.get(
        '/cryptos/:id',
        [idParams],
        CryptoController.show
    );

    routes.post(
        '/cryptos/:id',
        [cryptoSchema],
        CryptoController.store
    );

    routes.post(
        '/cryptos/:id/order',
        [cryptoOrderSchema],
        CryptoOrderController.createOrder
    );

    routes.delete(
        '/:user/orders/cryptos/:id/delete',
        [idParams],
        CryptoOrderController.destroyOrder
    );

}