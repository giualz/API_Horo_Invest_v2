'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    const dataArray = [{
      stock_name: 'MGLU3',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      stock_name: 'ALPA4',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]

    return queryInterface.bulkInsert('stocks', dataArray)
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('stocks', null, {})
  }
};
