const axios = require('axios').default

const getCryptosApi = async (crypto) => {

    let today = new Date
    let yesterday = new Date
    yesterday.setDate(yesterday.getDate() - 1)
    let nToday = today.toISOString()
    let nYesterday = yesterday.toISOString()

    let options = {
        "method": "GET",
        // "url": `https://rest.coinapi.io/v1/exchangerate/${crypto}/USD/history?period_id=1DAY&time_start=${nYesterday}&time_end=${nToday}`,
        "url": `https://www.okanebox.com.br/api/acoes/ultima/${stockName}/`,
        "headers": { 'X-CoinAPI-Key': 'E2516908-8B12-442E-9652-85650CE32417' }
    }

    try {
        let response = await axios.request(options)
        let cryptoYesterdayAndToday = response.data
        console.log('🚀 ~ cryptoYesterdayAndToday', cryptoYesterdayAndToday)
        
        let cryptoObject = {
            cryptoName: crypto,
            cryptoPrice: cryptoYesterdayAndToday[1].rate_open,
            cryptoPriceBefore: cryptoYesterdayAndToday[0].rate_open
        }
        console.log(cryptoObject);

        return cryptoObject

    } catch (error) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        throw error
    }
}

module.exports = {
    getCryptosApi
}


