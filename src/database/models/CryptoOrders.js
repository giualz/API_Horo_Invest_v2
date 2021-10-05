const { Model, DataTypes } = require('sequelize');

class CryptoOrders extends Model {

    static init(sequelize) {

        super.init(
            {
                email: DataTypes.TEXT,
                crypto_name: DataTypes.STRING,
                crypto_quantity: DataTypes.INTEGER,
                crypto: DataTypes.INTEGER
            },   
            {
                sequelize,
                tableName: 'orders-cryptos'
            }
        );
    }

    static associate(models){
        this.belongsToMany(models.Users, {
            foreignKey: 'crypto_id',
            through: 'orders-cryptos',
            as: 'users'
        })
    }
}

module.exports = CryptoOrders