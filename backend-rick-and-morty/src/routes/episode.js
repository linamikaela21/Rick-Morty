const express = require('express')
const router = express.Router()

const { getAllEpisodes } = require('../controllers/episodes/getAllEpisodes')
const { getEpisodeByID } = require('../controllers/episodes/getEpisodesByID')
const { postEpisode } = require('../controllers/episodes/postEpisodes')

router.get('/episodes', getAllEpisodes)
router.get('/episodes/:id', getEpisodeByID)
router.post('/episodes', postEpisode)

module.exports = router