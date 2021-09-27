const {body} = require('express-validator')

exports.stocksSchema = [
//array de middlewares
    body('stockQuantity').notEmpty().withMessage('Insert quantity')
]