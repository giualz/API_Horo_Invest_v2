'use strict';

// const { SequelizeScopeError } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users-currencies', {
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
      stock_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'currencies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface) => {

    return queryInterface.dropTable('users-currencies');

  }
};
