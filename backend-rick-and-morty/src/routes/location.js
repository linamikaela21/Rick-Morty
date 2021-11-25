const express = require('express')
const router = express.Router()

const { getAllLocations } = require('../controllers/locations/getAllLocations')
const { getLocationByID } = require('../controllers/locations/getLocationByID')
const { postLocation } = require('../controllers/locations/postLocation')

router.get('/locations', getAllLocations)
router.get('/locations/:id', getLocationByID)
router.post('/locations', postLocation)

module.exports = router