//params - check, header
const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.stocksSchema = validateDto([
    //array de middlewares
    body('name')
        .notEmpty()
        .withMessage('Insert name'),
    body('email')
        .notEmpty()
        .withMessage('Insert email'),
    body('stockQuantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('stockPrice')
        .notEmpty()
        .withMessage('Insert price'),
])