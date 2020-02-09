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
        slot: new Date('02/21/2020 18:30:00').toGMTString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};

// let myDate = new Date('02/21/2020 18:30:00');
// undefined
// myDate
// Date Fri Feb 21 2020 18:30:00 GMT-0500 (Eastern Standard Time)

// myDate.toISOString
// function toISOString()

// myDate.toISOString()
// "2020-02-21T23:30:00.000Z"
// myDate.toGMTString()
// "Fri, 21 Feb 2020 23:30:00 GMT"
// gmtDate = myDate.toGMTString();
// "Fri, 21 Feb 2020 23:30:00 GMT"
// gmtDate.toISOString();
// TypeError: gmtDate.toISOString is not a function
// debugger eval code:1:9
// gmtDate.toISOString()
// TypeError: gmtDate.toISOString is not a function
// debugger eval code:1:9
// gmtDate.type
// undefined
// gmtDate.typeOf
// undefined
// typeof(gmtDate)
// "string"
// gmtDate
// "Fri, 21 Feb 2020 23:30:00 GMT"
// reconv = new Date(gmtDate);
// Date Fri Feb 21 2020 18:30:00 GMT-0500 (Eastern Standard Time)

// ​