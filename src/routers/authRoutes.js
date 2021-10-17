const AuthController = require('../controller/AuthController')

module.exports = (routes) => {

    routes.post(
        '/login',
        AuthController.login
    );

    routes.post(
        '/register',
        AuthController.register
    );

}