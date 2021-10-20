const { validateDto } = require('../utils/handler');
const { body } = require('express-validator');

exports.loginSchema = validateDto([
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
        .isString()
        .withMessage('password must be valid')
])

exports.registerSchema = validateDto([
    ...loginSchema,
    body('name')
        .notEmpty()
        .withMessage(''),
    body('email')
        .notEmpty()
        .withMessage(''),
    body('password')
        .notEmpty()
        .withMessage(''),
    body('user_type')
        .default(2)
        .isNumeric(),
    body('status')
        .default(true)
        .isBoolean()
])