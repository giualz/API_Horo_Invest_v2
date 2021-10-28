const UserController = require('../controller/UserController');
const adminOnly = require('../middlewares/adminOnly');

module.exports = (routes) => {

    routes.get(
        '/users',
        [adminOnly],
        UserController.index
    );
}