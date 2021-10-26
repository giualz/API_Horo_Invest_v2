const axios = require('axios').default

const getStocksApi = async (stock) => {

    try {

        let config = {
            "method": "GET",
            "url": `https://www.okanebox.com.br/api/acoes/hist/${stock}/20210901/20210902/`,
        }

        let response = await axios.request(config)

		let responsePrice = response.data

		let stockDataObject = {
            
            stockName: stock,
			stockPrice: responsePrice[1]['PREABE'],
			stockPriceBefore: responsePrice[0]['PREABE']
		}

        return stockDataObject

    } catch (error) {

        throw error
    }
}

module.exports = {
    getStocksApi
}