const User = require('../database/models/user')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    }, 

    async userUpdate(req, res) {
        
    }
}