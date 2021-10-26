const jwt = require('jsonwebtoken');
const CryptoOrders = require('../database/models/CryptoOrders');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {

        
        const { id: crypto_id } = req.params;
        const { authorization } = req.headers;
 
        const token = authorization.split(' ')[1]
        const {
            id: user_id,
            user_type
        } = jwt.decode(token)

        if (user_type !== 2) {
            return res
                .status(401)
                .json('Orders may only be sent by users')
        }
        
        const {
            cryptoQuantity: crypto_quantity,
            cryptoPrice: crypto_price
        } = req.body;

        try {
            
            await CryptoOrders.create({ 
                user_id,
                crypto_id: Number(crypto_id),
                crypto_quantity: Number(crypto_quantity),
                crypto_price: Number(crypto_price),
            })

            return res
                .status(201)
                .json('Order created')
                
        } catch (error) {
            console.log(error)
            return res
                .status(400)
                .json('Order failed')
        }
    },

    async destroyOrder(req, res) {

        const { id } = req.params;
        const { authorization } = req.headers;
 
        const token = authorization.split(' ')[1]
        const {
            // id: user_id,
            user_type
        } = jwt.decode(token)
        
        if (user_type !== 2) {
            return res
                .status(401)
                .json('Deletion may only be done by users')
        }
        
        try{ const order = await CryptoOrders.findOne({
            where: {
                id: id,
            }})
        order.destroy()
        res.status(200).json('order excluded')

    
    } catch(error){ 

        throw error
    }
        
}}