const express = require('express')
const router = express.Router()

const { getAllCharacters } = require('../controllers/characters/getAllCharacters')
const { getCharactersByID } = require('../controllers/characters/getCharactersByID')
const { postCharacter } = require('../controllers/characters/postCharacter')

router.get('/characters', getAllCharacters)
router.get('/characters/:id', getCharactersByID)
router.post('/characters', postCharacter)

module.exports = router