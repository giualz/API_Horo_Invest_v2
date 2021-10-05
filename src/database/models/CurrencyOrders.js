const { Model, DataTypes } = require('sequelize');

class CurrencyOrders extends Model {

    static init(sequelize) {

        super.init(
            {
                email: DataTypes.TEXT,
                currency_name: DataTypes.STRING,
                currency_quantity: DataTypes.INTEGER,
                currency_price: DataTypes.INTEGER
            },   
            {
                sequelize,
                tableName: 'orders-currencies'
            }
        );
    }

    static associate(models){
        this.belongsToMany(models.Users, {
            foreignKey: 'stock_id',
            through: 'orders-currencies',
            as: 'users'
        })
    }
}

module.exports = CurrencyOrders