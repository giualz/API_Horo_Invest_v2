const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

//array (cada item é um middleware) e injeta os erros
exports.stockSchema = validateDto([
    body('stock_name')
        .notEmpty()
        .withMessage('Insert stock name')
        .isString()
        .withMessage('Currency name must be a string'),
    body('status')
        .notEmpty()
        .withMessage('Insert status')
        .default(true)
        .isBoolean()
]);

exports.stockOrderSchema = validateDto([
    body('stock_quantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('stock_price')
        .notEmpty()
        .withMessage('Insert price'),
])