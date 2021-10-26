const Stock = require('../database/models/stock');
const stocksApi = require('../services/stocksApi')
// const errorHandler = require('../config/errorHandler');

module.exports = {
    async index(req, res) {

        const stocks = await Stock.findAll()

        const returnAllStocks = await Promise.all(stocks.map(async stock => {

            const { id, stock_name } = stock

            const stockDataObject = await stocksApi.getStocksApi(stock_name)

            return {
                id,
                stockName: stock_name,
                stockPrice: stockDataObject.stockPrice,
                stockPriceBefore: stockDataObject.stockPriceBefore
            }
        }))

        return res.status(200).json(returnAllStocks)
    },

    async store(req, res) {
        const data = req.body

        try {
            await Stock.create(data)
            return res
                .status(200)
                .json('Stock added')
        } catch (error) {
            return res
                .status(400)
                .json('Register failed')
        }

    },
    //VOLTAR PRA CÁ NO FINAL
    // async show(req, res) {
    //     const { id } = req.params

    //     //find by primary key
    //     const stock = await Stock.findByPk(id, {
    //         include: {
    //             association: 'users',
    //             attributes: ['name', 'email'],
    //             through: {
    //                 attributes: []
    //             }
    //         }
    //     })
    //     console.log(stock)
    //     if (!stock) {
    //         throw new errorHandler(400, `Invalid param ${id}`)
    //     }
    //     return res.json(stock)
    // }
}