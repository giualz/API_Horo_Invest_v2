const { validateDto } = require('../utils/handler');
const { body } = require('express-validator');

const loginSchema = validateDto([
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
])

const registerSchema = validateDto([
    ... loginSchema,
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty'),
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
        .isString()
        .withMessage('Password must be valid')
        .isAlphanumeric()
        .withMessage('Password may contain only letters and numbers')
        .isLength({min: 6})
        .withMessage('Password must contain at least 6 characters')
        .isLength({max: 30})
        .withMessage('Password must not contain more than 30 characters'),
    body('user_type')
        .default(2)
        .isNumeric(),
    body('status')
        .default(true)
        .isBoolean()
]);

exports.authSchema = validateDto([...loginSchema]);
exports.registerSchema = validateDto([...loginSchema])