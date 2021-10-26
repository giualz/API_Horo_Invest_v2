
//YET TO BE IMPLEMENTED

'use strict';

// const { SequelizeScopeError } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders-currencies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      currency_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'currencies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      currency_quantity: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      currency_price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {

    return queryInterface.dropTable('orders-currencies');

  }
};
