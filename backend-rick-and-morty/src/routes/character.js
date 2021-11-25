const express = require('express')
const router = express.Router()

const { getCharacters, getCharactersByID, postCharacter } = require('../controllers/character')

router.get('/characters', getCharacters)
router.get('/characters/:id', getCharactersByID)
router.post('/characters', postCharacter)

module.exports = router