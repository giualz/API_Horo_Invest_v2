const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.cryptoSchema = validateDto([
    body('crypto_quantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('crypto_price')
        .notEmpty()
        .withMessage('Insert price'),
])