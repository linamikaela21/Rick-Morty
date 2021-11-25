const express = require('express')
const router = express.Router()

const { getEpisodes, getEpisodeByID, postEpisode } = require('../controllers/episode')

router.get('/episodes', getEpisodes)
router.get('/episodes/:id', getEpisodeByID)
router.post('/episodes', postEpisode)

module.exports = router