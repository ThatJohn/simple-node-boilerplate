'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE
  }, {});

  class Reservation extends SequelizeReservation {
    static async all() {
      return await this.findAll();
    }

    static async new(req, res) {
      console.log(req.body);
      return await this.create({
        name: req.body.name,
        slot: new Date(req.body.slot),
        createdAt: new Date(),
        updatedAt: new Date()
      })
        .then(result => res.json(result));
    }
  }

  return Reservation;
};
