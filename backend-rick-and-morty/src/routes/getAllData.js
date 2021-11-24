const express = require('express')
const getAllData  = require('../controllers/getAllData')
const router = express.Router()


router.get('/api', getAllData)

module.exports = router