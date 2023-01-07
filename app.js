const projectName = 'movie-list-010323'
const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`
const exphbs = require('express-handlebars')
require('mongoose')
const moviesDB = require('./models/movieSchema')
const movieImgAPI = 'https://movie-list.alphacamp.io/posters/'

// // load JSON file
// const moviesJson = require('./models/seeds/movies.json')

// setting express-handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



// "use" in express
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   moviesDB.find()
//     .lean()
//     .then(movieData => {
//       return res.render('index', { title: 'Movie List', movieData, movieImgAPI })
//     })
//     .catch(error => console.log('get router error'))
// })

// EASY-router
app.get('/', (req, res) => {
  res.render('index', { title: 'Movie List', movieImgAPI })

  console.log(moviesDB
    .find()
    .lean()
    .then(
      movieData => movieData.title
      // Promise { <pending> }?
      ))
})



app.listen(port, () => {
  console.log(`${projectName} app is running on ${host}`)
})