const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.currencySchema = validateDto([
    body('currencyQuantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('currencyPrice')
        .notEmpty()
        .withMessage('Insert price'),
])