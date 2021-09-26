'use strict';

const NameTable = 'stocks'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //norteia como vai ser o db
    return queryInterface.createTable(NameTable, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      stock_name: {
        type: Sequelize.STRING,
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

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable(NameTable);

  }
};
