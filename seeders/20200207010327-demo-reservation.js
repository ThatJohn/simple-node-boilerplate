'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        name: 'John Cena',
        slot: new Date('2020-02-09 22:30 -05:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Not John Cena',
        slot: new Date('21 Feb 2020 18:30:00 GMT-0000'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepetruen0',
        slot: new Date('02/21/2020 18:30:00').toISOString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};