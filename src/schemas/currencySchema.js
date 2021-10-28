
//YET TO BE IMPLEMENTED

const { validateDto } = require('../utils/handler')
const { body } = require('express-validator');

exports.currencySchema = validateDto([
    body('currency_name')
        .notEmpty()
        .withMessage('Insert currency name')
        .isString()
        .withMessage('Currency name must be a string'),
    body('status')
        .default(true)
        .isBoolean()
]);

exports.currencyOrderSchema = validateDto([
    body('currency_quantity')
        .notEmpty()
        .withMessage('Insert quantity'),
    body('currency_price')
        .notEmpty()
        .withMessage('Insert price'),
]);