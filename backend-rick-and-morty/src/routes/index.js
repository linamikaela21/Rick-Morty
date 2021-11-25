const express = require('express')
const router = express.Router()

const getAllData = require('../routes/getAllData')
const characterRouters = require('../routes/character')
const episodeRouters = require('../routes/episode')
const locationRouters = require('../routes/location')

router.use('/api', getAllData)
router.use('/api', characterRouters)
router.use('/api', episodeRouters)
router.use('/api', locationRouters)

module.exports = router