const { Model, DataTypes } = require('sequelize');

class Stocks extends Model {

  static init(sequelize) {

    super.init({
      stock_name: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize,
      tableName: 'stocks',
      updatedAt: 'updated_at',
      createdAt: 'created_at'
    })
  }

  static associate(models) {
    this.belongsToMany(models.Users, {
      foreignKey: 'stock_id',
      through: 'orders-stocks',
      as: 'users'
    })
  }
}

module.exports = Stocks