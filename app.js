//////// load 3-rd-party-tools, variable
const projectName = 'movie-list-010323'
const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`
const exphbs = require('express-handlebars')
require('mongoose')
const moviesDB = require('./models/movieSchema')
const movieImgAPI = 'https://movie-list.alphacamp.io/posters/'

//////// load JSON file
const moviesJson = require('./models/seeds/movies.json').results

//////// setting express-handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



//////// "use" in express
app.use(express.static('public'))

//////// Router
// index-router (DB)
// app.get('/', (req, res) => {
//   moviesDB.find()
//     .lean()
//     .then(movieData => {
//       return res.render('index', { title: 'Movie List', movieData, movieImgAPI })
//     })
//     .catch(error => console.log('get router error'))
// })

// index-router(JSON)
app.get('/', (req, res) => {
  res.render('index', { title: 'Movie List', movieData: moviesJson, movieImgAPI })
  console.log(movieImgAPI)
})

// index-router(EASY)
// app.get('/', (req, res) => {
//   res.render('index', { title: 'Movie List', movieImgAPI })

//   console.log(moviesDB
//     .find()
//     .lean()
//     .then(
//       movieData => movieData.title
//       // Promise { <pending> }?
//       ))
// })

// detail-dynamic-router(JSON)
app.get('/movies/:movie_id', (req, res) => {
  const movie = moviesJson.find(movie => {
    return movie.id.toString() === req.params.movie_id
  })
  res.render('detail', { movie })
})
// detail-dynamic-router(DB)
// app.get('/movies/:movie_id', (req, res) => {
//   const id = req.params.movie_id
//   return moviesDB.findById(id)
//     .lean()
//     .then ( movie => {
//       return res.render('detail', { movie })
//     })
//     .catch(error => console.log('dynamic router error'))
// })

//SearchBar (JSON)


//////// Listener
app.listen(port, () => {
  console.log(`${projectName} app is running on ${host}`)
})