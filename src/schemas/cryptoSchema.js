const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.cryptoSchema = validateDto([
    body('cryptoQuantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('cryptoPrice')
        .notEmpty()
        .withMessage('Insert price'),
])