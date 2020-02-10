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
        name: 'Some dude',
        slot: new Date('2020-02-21T23:30:00.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Fajardo',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bruce Wayne',
        slot: new Date('2020-02-09T04:10:33.037Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clark Kent',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Steve Rogers',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Barry Allen',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peter Parker',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tony Stark',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scott Summers',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Billy Batson',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bruce Banner',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matt Murdock',
        slot: new Date('2020-02-09T04:10:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jessica Jones',
        slot: new Date('2020-02-11T10:14:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luke Cage',
        slot: new Date('2020-02-11T22:14:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oliver Queen',
        slot: new Date('2020-02-12T22:14:33.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};