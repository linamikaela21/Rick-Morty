const express = require('express')
const getAllData  = require('../controllers/getAllData')
const router = express.Router()


router.get('/', getAllData)

module.exports = router