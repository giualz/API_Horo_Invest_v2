'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Users extends Model {

    static init(sequelize) {
      super.init(
        {
          name: DataTypes.STRING,
          email: DataTypes.TEXT
        },
        {
          sequelize,
          tableName: 'users'
        }
      );
    }

    static associate(models) {
      this.belongsToMany(models.Users, {
        foreignKey: 'user_id',
        through: 'users-stocks',
        as: 'stocks'
      })
    }

    static associate(models) {
      this.belongsToMany(models.Users, {
        foreignKey: 'user_id',
        through: 'users-currencies',
        as: 'currencies'
      })
    }

    static associate(models) {
      this.belongsToMany(models.Users, {
        foreignKey: 'user_id',
        through: 'users-cryptos',
        as: 'cryptoss'
      })
    }
  };

  return Users;
  
};