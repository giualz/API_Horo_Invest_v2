const jwt = require('jsonwebtoken');
const { SECRET_KEY: secret_key } = process.env;

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' })
    }

    const parts = authHeader.split(' ')

    if (parts.length !== 2){
        return res.status(401).json({ error: 'Invalid token' })
    }

    const [schema, token] = parts

    if(schema.toLowerCase() !== 'bearer') {
        return res.status(401).json({ error: 'Token malformatted' })
    }
    // console.log('#############################')

    jwt.verify(token, secret_key, (err, data) => {
        if (err) {
            return res.status(401).json('Invalid token')
        }
        console.log(data)
        if(data.user_type !== 1) {
            return res.status(401).json({error: 'Unauthorized'})
        }
        console.log("***********************************")
        next()
    })
}