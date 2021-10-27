require('dotenv').config()
const { DB_DIALECT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env

module.exports = {

    development: {
        dialect: DB_DIALECT || 'postgres',
        host: DB_HOST || 'localhost',
        username: DB_USERNAME || 'default',
        password: DB_PASSWORD || 'secret',
        database: DB_DATABASE,
        port: 5432,
        define: {
            timestamps: true,
            underscore: true,
        },
        dialectOptions: {
            ssl: true
        },
    }
}