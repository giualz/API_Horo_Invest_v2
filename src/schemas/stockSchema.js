const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.stockSchema = validateDto([
    body('stock_quantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('stock_price')
        .notEmpty()
        .withMessage('Insert price'),
])