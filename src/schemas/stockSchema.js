const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.stockSchema = validateDto([
    body('stock_name')
        .notEmpty()
        .withMessage('Insert stock name'),
    body('status')
        .notEmpty()
        .withMessage('Insert status')
]);

exports.stockOrderSchema = validateDto([
    body('stock_quantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('stock_price')
        .notEmpty()
        .withMessage('Insert price'),
])