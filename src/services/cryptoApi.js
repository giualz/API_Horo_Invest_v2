const axios = require('axios').default;

const getCryptosApi = async (crypto) => {

    try {
        let dates = []
        let today = parseInt((new Date().getTime() / 1000).toFixed(0))
        let yesterday = new Date
        yesterday.setDate(yesterday.getDate() - 1)
        let newYesterday = parseInt((new Date(yesterday).getTime() / 1000).toFixed(0))
        dates.push(today, newYesterday)

        let options = await Promise.all(dates.map(async date => {

            let config = {
                "method": "GET",
                "url": `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${crypto}&tsyms=USD&ts=${date}`,
                "headers": { 'authorization': 'Apikey 6d98f8093d7c1701958d323b12fd8ee5b598a1207cbacf0ea9c190c723cfbf026d98f8093d7c1701958d323b12fd8ee5b598a1207cbacf0ea9c190c723cfbf02' }
            }

            let response = await axios.request(config)

            return response.data

        }))

        let cryptoObj = {
            cryptoPrice: options[0],
            cryptoPriceBefore: options[1],
        }

        return cryptoObj

    } catch (error) {
        throw error
    }
}

module.exports = {
    getCryptosApi
}


