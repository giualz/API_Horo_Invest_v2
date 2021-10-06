const { Model, DataTypes } = require('sequelize');

class Cryptos extends Model {

  static init(sequelize) {
    super.init({
      crypto_name: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize,
      tableName: 'cryptos',
      updatedAt: 'updated_at',
      createdAt: 'created_at'
    });
  }

  static associate(models) {
    this.belongsToMany(models.Users, {
      foreignKey: 'id',
      through: 'orders-cryptos',
      as: 'users'
    })
  }
}

module.exports = Cryptos