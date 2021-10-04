'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Currencies extends Model {

    static init(sequelize) {
      super.init({
        currency_name: DataTypes.STRING,
        status: DataTypes.BOOLEAN
      }, {
        sequelize,
        modelName: 'currencies',
      });
    }

    static associate(models){
      this.belongsToMany(models.Users, {
          foreignKey: 'currency_id',
          through: 'users-currencies',
          as: 'users'
      })
  }
  };

  return Currencies;
  
};