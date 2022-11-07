'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'Anna',
      lastName: 'Aqulyan',
      email: 'anna.aqulyan@email.com',
      password: 'ann482',
      createdAt: new Date(),
      updatedAt: new Date()

    },
      {
        id: 2,
        firstName: 'Edgar',
        lastName: 'Manukyan',
        email: 'edgar.manukyan@email.com',
        password: 'edg562',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: 'Ashot',
        lastName: 'Ashotyan',
        email: 'ashot.ashotyan@email.com',
        password: 'aassd154',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        firstName: 'Milena',
        lastName: 'Baxdasaryan',
        email: 'milena.baxdasaryan@email.com',
        password: 'aassd154',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        firstName: 'Ararat',
        lastName: 'Mnoyan',
        email: 'ararat.mnoyan@email.com',
        password: 'jgjf154',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

    await queryInterface.bulkInsert('Post', [{
      id: 1,
      title: 'vgd',
      content: 'dg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 2,
        title: 'vfdd',
        content: 'dfg',
        createdAt: new Date(),
        updatedAt: new Date()


}]);
},
  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }}

