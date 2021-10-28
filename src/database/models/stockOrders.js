const { Model, DataTypes } = require('sequelize');

class StockOrders extends Model {

    static init(sequelize) {

        super.init(
            {
                user_id: DataTypes.INTEGER,
                stock_id: DataTypes.INTEGER,
                stock_quantity: DataTypes.DECIMAL(10, 2),
                stock_price: DataTypes.DECIMAL(10, 2)
            },
            {
                sequelize,
                tableName: 'orders-stocks',
                updatedAt: 'updated_at',
                createdAt: 'created_at'
            }
        )
    }

    static associate(models) {
        this.belongsToMany(models.Users, {
            foreignKey: 'stock_id',
            through: 'orders-stocks',
            as: 'users'
        })
    }
}

module.exports = StockOrders