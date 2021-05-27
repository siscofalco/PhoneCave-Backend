const express = require('express');
const router  = express.Router();
const Phone = require('../models/Phone.model')

/* GET home page */
router.get('/', (req, res, next) => {
  return res.status(200).json;
});

// GET Phone details

router.get('/:id', req, res, next) => {
  const { id } = req.params;
  Phone.findOne({ _id: id })
  .then(data => res.status(200).json(data))
  .catch(error => res.status(500).json(error))
}

module.exports = router;
