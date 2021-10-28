const Stock = require('../database/models/stock');
const stocksApi = require('../services/stocksApi');

module.exports = {
    async index(req, res) {

        const stocks = await Stock.findAll();

        const returnAllStocks = await Promise.all(stocks.map(async stock => {

            const { id, stock_name } = stock;

            const stockDataObject = await stocksApi.getStocksApi(stock_name);

            return {
                id,
                stockName: stock_name,
                stockPrice: stockDataObject.stockPrice,
                stockPriceBefore: stockDataObject.stockPriceBefore
            }
        }));

        return res.status(200).json(returnAllStocks)
    },

    async store(req, res) {
        const data = req.body;

        try {
            await Stock.create(data)
            return res
                .status(201)
                .json('Stock added')
        } catch (error) {
            return res
                .status(400)
                .json('Register failed')
        }
    },

    async show(req, res) {
        const { id } = req.params;

        const stock = await Stock.findByPk(id, {
            include: {
                association: 'users',
                attributes: ['name', 'email'],
                through: {
                    attributes: []
                }
            }
        });

        if (!stock) {
            return res
                .status(400)
                .json(`Invalid param ${id}`)
        }
        return res.json(stock)
    }
}