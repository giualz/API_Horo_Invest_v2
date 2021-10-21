const jwt = require('jsonwebtoken')
const { SECRET_KEY: secret_key } = process.env

module.exports = (req, res, next) => {

    //header padrão de autorização
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' })
    }

    const parts = authHeader.split(' ')

    if (parts.length !== 2){
        return res.status(401).json({ error: 'Invalid token' })
    }

    //verificação de dicionário: schema + token
    const [schema, token] = parts

    if( schema.toLowerCase() !== 'bearer' ) {
    //ou com rejex
    //if(!/Bearer $/i.test(schema))
        return res.status(401).json({ error: 'Token malformatted' })
    }


    jwt.verify(token, secret_key, (err, data) => {
        if(err) {
            res.status(401).json({ error: 'Invalid token' })
        }
        next()
    })
}