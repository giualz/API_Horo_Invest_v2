const { validateDto } = require('../utils/handler')
const { param } = require('express-validator');

exports.idParams = validateDto([
    param('id')
    .notEmpty()
    .isNumeric()
    .withMessage('Insert valid param')
])