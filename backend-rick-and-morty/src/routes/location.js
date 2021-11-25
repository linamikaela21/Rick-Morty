const express = require('express')
const router = express.Router()

const { getLocation } = require('../controllers/location')

router.get('/locations', getLocation)

module.exports = router