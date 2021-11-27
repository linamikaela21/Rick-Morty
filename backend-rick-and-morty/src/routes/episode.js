const express = require('express')
const router = express.Router()

const { getAllEpisodes } = require('../controllers/episodes/getAllEpisodes')
const { postEpisode } = require('../controllers/episodes/postEpisodes')

router.get('/episodes', getAllEpisodes)
router.post('/episodes', postEpisode)

module.exports = router