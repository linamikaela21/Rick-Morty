const express = require('express')
const { deleteCharacter } = require('../controllers/characters/deleteCharacter')
const router = express.Router()

const { getAllCharacters } = require('../controllers/characters/getAllCharacters')
const { getCharactersByID } = require('../controllers/characters/getCharactersByID')
const { postCharacter } = require('../controllers/characters/postCharacter')
const { putCharacter } = require('../controllers/characters/putCharacter')

router.get('/characters', getAllCharacters)
router.get('/characters/:id', getCharactersByID)
router.post('/characters', postCharacter)
router.put('/characters/:id', putCharacter)
router.delete('/characters/:id', deleteCharacter)

module.exports = router