'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //tabela
    const dataArray = [{
      stock: 'MGLU3',
      stock_quantity: '',
      stock_price: '',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      stock: 'ALPA4',
      stock_quantity: '',
      stock_price: '',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]

    //junta tudo e insere na tabela
    //inserção não precisa de await
    return queryInterface.bulkInsert('stocks', dataArray)
  },

  down: async (queryInterface, Sequelize) => {
    //deleta stocks, null = sem configurações, deixa vazio
    return await queryInterface.bulkDelete('stocks', null, {})
  }
};
