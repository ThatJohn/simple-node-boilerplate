const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
const cors = require('cors');

router.get('/', cors(), async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', cors(), async (req, res) => {
  res.json(await Reservation.new(req));
});

router.get('/duplicates', cors(), async (req, res) => {
  let result = res.json(await Reservation.duplicates());
});

module.exports = router;