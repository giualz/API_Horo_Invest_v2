const User = require('../database/models/user');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.status(200).json(users)
    }
}