const express = require('express')
const { deleteLocation } = require('../controllers/locations/deleteLocation')
const router = express.Router()

const { getAllLocations } = require('../controllers/locations/getAllLocations')
const { postLocation } = require('../controllers/locations/postLocation')

router.get('/locations', getAllLocations)
router.post('/locations', postLocation)
router.delete('/locations/:id', deleteLocation)

module.exports = router