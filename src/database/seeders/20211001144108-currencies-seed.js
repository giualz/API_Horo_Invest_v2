'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const dataArray = [{
      currency: 'BRL',
      currency_quantity: '',
      currency_price: '',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      currency: 'USD',
      currency_quantity: '',
      currency_price: '',
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
