const { validateDto } = require('../utils/handler')
const { body, param } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.stockSchema = validateDto([
    body('stockQuantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('stockPrice')
        .notEmpty()
        .withMessage('Insert price'),
])

