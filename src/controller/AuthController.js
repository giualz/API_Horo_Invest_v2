const User = require('../database/models/user');
const { generateHash, generateToken } = require('../utils/helper');
const bcrypt = require('bcrypt');
// const errorHandler = require('../config/errorHandler');

module.exports = {

    async login(req, res) {

        const { email, password } = req.body
        const user = await User.findOne({
            attributes: {
                include: ["password", "user_type"]
            },
            where: { email: email }
        })

        if (!user) {
            return res
                .status(400)
                .json('User not found')
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res
                .status(400)
                .json('Wrong pasword')
        }

        if (!user.status) {
            return res
                .status(400)
                .json('Invalid user')
        }

        const payloadToken = {
            id: user.id, name: user.name, email: user.email,
            user_type: user.user_type, status: user.status
        }

        const token = generateToken(payloadToken)

        return res.json({ ...token })
    },

    async register(req, res) {

        const payload = req.body
        payload.user_type = 2
        payload.status = false
        const passwordHash = await generateHash(payload.password)
        console.log(passwordHash)
        try {
            await User.create({ ...payload, password: passwordHash })
            return res
                .status(200)
                .json('User registered')
        } catch(error) {
            return res
                .status(400)
                .json('Register failed')
        }
    }
}