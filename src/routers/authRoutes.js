const AuthController = require('../controller/AuthController')
const { authSchema, registerSchema } = require('../schemas/authSchema')

module.exports = (routes) => {

    routes.post(
        '/login',
        [authSchema],
        AuthController.login
    );

    routes.post(
        '/register',
        [registerSchema],
        AuthController.register
    );

}