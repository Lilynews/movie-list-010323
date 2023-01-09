const express = require('express')
const router = express.Router()
const moviesDB = require("../../models/movieSchema")

//SearchBar
router.get('/', (req, res) => {
  const keyword = (req.query.keyword) ? req.query.keyword.trim() : ''
  const sort = req.query.sort || 'default'
  const sortBy = {
    default: { id: 'asc' },
    AtoZ: { title: 'asc' },
    ZtoA: { title: 'desc' },
  }

  const sortSelected = { [sort]: true }
  moviesDB.find()
    .lean()
    .sort(sortBy[sort])
    .then(
      movies => {
        const movieResult = movies.filter(movie => {
          return movie.title.toLowerCase().includes(keyword.toLowerCase())
        })

        if (!keyword) {
          res.render('index', {
            title: 'Movie List',
            movies,
            sortSelected
          })
        } else {
          res.render('index', {
            title: 'Movie List',
            movies: movieResult,
            keyword,
            sortSelected
          })
        }
      })
    .catch(error => {
      console.log(error)
      // console.log('search router error')
    })
})

module.exports = router