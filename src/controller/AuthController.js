const User = require('../database/models/user');
const { generateHash, generateToken } = require('../utils/helper');
const bcrypt = require('bcrypt');
const errorHandler = require('../config/errorHandler');

module.exports = {

    async login(req, res) {

        const {email, password} = req.body
        const user = await User.findOne({
            attributes: {
                include: ["password", "user_type"]
            },
            where: {email: email}})

            console.log('************')

        if(!user) {
            throw new errorHandler(400, 'User not found')
        }

        if(!(await bcrypt.compare(password, user.password))) {
            throw new errorHandler(400, 'Wrong password')
        }

        if(!user.status) {
            throw new errorHandler(400, 'Invalid user')
        }

        const payloadToken = {id: user.id, name: user.name, email: user.email, 
            user_type: user.user_type, status: user.status}

        const token = generateToken(payloadToken)

        return res.json({ ...token })
    },

    async register(req, res) {
        
        const payload = req.body
        payload.user_type = 1
        payload.status = false
        const passwordHash = await generateHash(payload.password)
        console.log(passwordHash)
        await User.create({ ...payload, password: passwordHash })

        return res
                .status(200)
                .json('User created')

    }

}