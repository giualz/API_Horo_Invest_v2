const StockOrders = require('../database/models/StockOrders');
const User = require('../database/models/user')
const { generateHash, generateToken } = require('../utils/helper');

module.exports = {

    //CHECK AFTER LOGIN
    async createOrder(req, res) {
        const { id: stock_id } = req.params;
        const { authorization } = req.headers;
        console.log(req.body)
        console.log(req.headers)
      
        const {
            stockQuantity: stock_quantity,
            stockPrice: stock_price 
        } = req.body;
        
        
        //vai no db, peag as infos do usuario com aquele email,pega o id e faz a ordem
        const user = await User.findOne({
            where: {
                id: user_type = 2
            }
        })
// if (!(await bcrypt.compare(user_id, user.user_id))) {
//             throw new errorHandler(400, 'Invalid user')
//         }
        console.log(user)

        const order = await StockOrders.create({
            user_id: user_id,
            stock_id: stock_id,
            stock_quantity: stock_quantity,
            stock_price: stock_price,
        })
        console.log('*********************************************')
    },

    async destroyOrder(req, res) {
        const params = req.params
        const order = await StockOrders.findOne({
            where: {
                user: parseInt(params.user_id),
                stock: parseInt(params.id)
            }
        })

        order.destroy()
        res.json('order excluded')
    }
}