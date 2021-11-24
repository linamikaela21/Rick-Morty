const express = require('express')
const router = express.Router()

const { getEpisodes } = require('../controllers/episode')

router.get('/episodes', getEpisodes)

module.exports = router