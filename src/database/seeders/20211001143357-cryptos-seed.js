
//YET TO BE IMPLEMENTED

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const dataArray = [{
      crypto_name: 'BTC',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      crypto_name: 'LUNA',
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
