const AuthController = require('../controller/AuthController')
const { loginSchema, registerSchema } = require('../schemas/authSchema')

module.exports = (routes) => {

    routes.post(
        '/login',
        [loginSchema],
        AuthController.login
    );

    routes.post(
        '/register',
        [registerSchema],
        AuthController.register
    );

}