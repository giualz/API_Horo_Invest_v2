'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const dataArray = [{
      crypto: 'BTC',
      crypto_quantity: '',
      crypto_price: '',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      crypto: 'LUNA',
      crypto_quantity: '',
      crypto_price: '',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]

    return queryInterface.bulkInsert('cryptos', dataArray)
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('cryptos', null, {})
  }
};
