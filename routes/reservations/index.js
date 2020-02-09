const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', async (req, res) => {
  res.json(await Reservation.new(req));
});

module.exports = router;