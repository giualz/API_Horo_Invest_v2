const { Model, DataTypes } = require('sequelize');

class CryptoOrders extends Model {

    static init(sequelize) {

        super.init(
            {
                user_id: DataTypes.INTEGER,
                crypto_id: DataTypes.INTEGER,
                crypto_quantity: DataTypes.DECIMAL(10, 2),
                crypto_price: DataTypes.DECIMAL(10, 2)
            },
            {
                sequelize,
                tableName: 'orders-cryptos',
                updatedAt: 'updated_at',
                createdAt: 'created_at'
            }
        )
    }

    static associate(models) {
        this.belongsToMany(models.Users, {
            foreignKey: 'crypto_id',
            through: 'orders-cryptos',
            as: 'users'
        })
    }
}

module.exports = CryptoOrders