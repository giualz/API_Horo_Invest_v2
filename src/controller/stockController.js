module.exports = {
    index(req, res) {
        const stocks = [
            {
                name: 'MGLU3'
            },
            {
                name: 'ALPA4'
            }
        ];
        return res.json(stocks)
    }
}