const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const movies = require('./modules/movies')

router.use('/', home)
router.use('/movies', movies)

module.exports = router