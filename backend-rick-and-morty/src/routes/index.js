const express = require('express')
const router = express.Router()

const getAllData = require('../routes/getAllData')
const characterRouters = require('../routes/character')
const episodeRouters = require('../routes/episode')

router.use('/', getAllData)
router.use('/api', characterRouters)
router.use('/api', episodeRouters)

module.exports = router