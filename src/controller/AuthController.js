const User = require('../database/models/user')
const { generateHash, generateToken } = require('../utils/helper')
const bcrypt = require('bcrypt')

module.exports = {

    async login(req, res) {

        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if(!user) {
            return res
                .status(400)
                .json({ error: 'User not found' })
        }

        if(!(await bcrypt.compare(password, user.password))) {
            return res
                .status(400)
                .json({ error: 'Wrong password' })
        }

        if(!user.status) {
            return res
                .status(400)
                .json({ error: 'Invalid user' })
        }

        const payload = {id: user.id, name: user.name, email: user.email, 
            user_type: user.user_type, status: user.status}

        const token = generateToken(payload)

        return res.json({ ...token })
    },

    async register(req, res) {

        const { email, password } = req.body
        const passwordHash = await generateHash(password)
        console.log(passwordHash)
        await User.create({ ...req.body, password: passwordHash })

        return res
                .status(200)
                .json('User created')

    }

}