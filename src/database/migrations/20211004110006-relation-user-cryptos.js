'use strict';

// const { SequelizeScopeError } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders-cryptos', {
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
      crypto_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'crypto', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      crypto_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      crypto_price: {
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

    return queryInterface.dropTable('orders-cryptos');

  }
};