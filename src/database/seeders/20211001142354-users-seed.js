'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const dataArray = [{
      name: 'Giulia',
      email: 'giu@lia.com',
      //waiting for token
      password: 1234,
      user_type: 1,
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Leonardo',
      email: 'leo@terra.com',
      //waiting for token
      password: 5678,
      user_type: 2,
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]

    return queryInterface.bulkInsert('users', dataArray)
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('users', null, {})
  }
}
