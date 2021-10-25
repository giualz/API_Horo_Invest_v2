const { Model, DataTypes } = require('sequelize');

class Currencies extends Model {

  static init(sequelize) {
    super.init({
      currency_name: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize,
      tableName: 'currencies',
      updatedAt: 'updated_at',
      createdAt: 'created_at'
    });
  }

  static associate(models) {
    this.belongsToMany(models.Users, {
      foreignKey: 'currency_id',
      through: 'orders-currencies',
      as: 'users'
    })
  }
};

module.exports = Currencies
