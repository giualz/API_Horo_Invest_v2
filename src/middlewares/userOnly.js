const jwt = require('jsonwebtoken');
const { SECRET_KEY: secret_key } = process.env;

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' })
    }

    const parts = authHeader.split(' ')
    console.log(parts)
    if (parts.length !== 2){
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
        
        if(data.user_type !== 2) {
            return res.status(401).json({error: 'Unauthorized'})
        }  

        next()
    })
}