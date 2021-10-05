const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.currencySchema = validateDto([
    body('currency_quantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('currency_price')
        .notEmpty()
        .withMessage('Insert price'),
])