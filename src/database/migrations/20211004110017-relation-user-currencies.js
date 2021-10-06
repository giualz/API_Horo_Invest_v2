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
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      currency_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'currencies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      currency_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      currency_price: {
        type: Sequelize.INTEGER,
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
