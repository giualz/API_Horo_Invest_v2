const jwt = require('jsonwebtoken');
const { SECRET_KEY: secret_key } = process.env;

module.exports = (req, res, next) => {

    const authHeader = req.header.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' })
    }

    const parts = authHeader.split(' ')

    if (parts !== 2){
        return res.status(401).json({ error: 'Invalid token' })
    }

    const [schema, token] = parts

    if(schema.toLowerCase() !== 'bearer') {
        return res.status(401).json({ error: 'Token malformatted' })
    }

    jwt.verify(token, secret_key, (err, data) => {
        if (err) {
            return res.status(401).json('Invalid token')
        }
        
        if(data.user !== 1) {
            return res.status(401).json({error: 'Unauthorized'})
        }
    })
}