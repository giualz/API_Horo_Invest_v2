'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const dataArray = [{
      currency_name: 'BRL',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      currency_name: 'USD',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]

    return queryInterface.bulkInsert('currencies', dataArray)
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('currencies', null, {})
  }
};
