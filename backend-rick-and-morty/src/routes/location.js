const express = require('express')
const router = express.Router()

const { getAllLocations } = require('../controllers/locations/getAllLocations')
const { postLocation } = require('../controllers/locations/postLocation')

router.get('/locations', getAllLocations)
router.post('/locations', postLocation)

module.exports = router