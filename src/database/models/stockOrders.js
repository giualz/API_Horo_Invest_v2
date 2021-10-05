const { Model, DataTypes } = require('sequelize');

class StockOrders extends Model {

    static init(sequelize) {

        super.init(
            {
                email: DataTypes.TEXT,
                stock_name: DataTypes.STRING,
                stock_quantity: DataTypes.INTEGER,
                stock_price: DataTypes.INTEGER
            },   
            {
                sequelize,
                tableName: 'orders-stocks'
            }
        );
    }

    static associate(models){
        this.belongsToMany(models.Users, {
            foreignKey: 'stock_id',
            through: 'orders-stocks',
            as: 'users'
        })
    }
}

module.exports = StockOrders