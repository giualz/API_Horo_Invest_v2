const { Model, DataTypes } = require('sequelize');

  class Users extends Model {

    static init(sequelize) {
      super.init(
        {
          name: DataTypes.STRING,
          email: DataTypes.TEXT, 
          password: DataTypes.STRING,
          user_type: DataTypes.INTEGER,
          status: DataTypes.BOOLEAN
        },
        {
          sequelize,
          tableName: 'users',
          updatedAt: 'updated_at',
          createdAt: 'created_at'
        }
      );
    }

    static associate(models) {
      this.belongsToMany(models.Stocks, {
        foreignKey: 'user_id',
        through: 'orders-stocks',
        as: 'stocks'
      })
    }

    static associate(models) {
      this.belongsToMany(models.Currencies, {
        foreignKey: 'user_id',
        through: 'orders-currencies',
        as: 'currencies'
      })
    }

    static associate(models) {
      this.belongsToMany(models.Cryptos, {
        foreignKey: 'user_id',
        through: 'orders-cryptos',
        as: 'cryptos'
      })
    }
  };

module.exports = Users