const express = require('express')
const { deleteEpisode } = require('../controllers/episodes/deleteEpisode')
const router = express.Router()

const { getAllEpisodes } = require('../controllers/episodes/getAllEpisodes')
const { postEpisode } = require('../controllers/episodes/postEpisodes')

router.get('/episodes', getAllEpisodes)
router.post('/episodes', postEpisode)
router.delete('/episodes/:id', deleteEpisode)

module.exports = router