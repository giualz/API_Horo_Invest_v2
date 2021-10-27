const User = require('../database/models/user');
const { generateHash, generateToken } = require('../utils/helper');
const bcrypt = require('bcrypt');

module.exports = {

    async login(req, res) {

        const { email, password } = req.body;
        const user = await User.findOne({
            attributes: {
                include: ["password", "user_type"]
            },
            where: { email: email }
        });

        if (!user) {
            return res
                .status(400)
                .json('User not found')
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res
                .status(400)
                .json('Wrong password')
        }

        if (!user.status) {
            return res
                .status(400)
                .json('Invalid user')
        }

        const payloadToken = {
            id: user.id, name: user.name, email: user.email,
            user_type: user.user_type, status: user.status
        };

        const token = generateToken(payloadToken);

        return res.json({ ...token })
    },

    async register(req, res) {

        const payload = req.body;
        console.log(req.body);
        payload.user_type = 2;
        payload.status = true;
        const passwordHash = await generateHash(payload.password);

        try {

            await User.create({ ...payload, password: passwordHash })
            console.log('chegou aqui');
            return res
                .status(201)
                .json('User registered')
        } catch (error) {

            return res
                .status(400)
                .json('Register failed')
        }
    }
}