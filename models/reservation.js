'use strict';

module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE
  }, {});

  class Reservation extends SequelizeReservation {
    static async all() {
      return await this.findAll({ group: ['slot'] });
    }

    static async new(req, res) {
      console.log(req.body.slot);
      return await this.create({
        name: req.body.name,
        slot: new Date(req.body.slot),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    static async duplicates(req, res) {
      return await this.findAll({
        attributes: ['slot', [sequelize.fn('COUNT', sequelize.col('slot')), 'total']],
        group: 'slot'
      });
    }
  }

  return Reservation;
};
