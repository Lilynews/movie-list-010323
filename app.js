const projectName = 'movie-list-010323'
const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`
const exphbs = require('express-handlebars')
require('mongoose')

// load JSON file
const moviesJson = require('./models/seeds/movies.json')

// setting express-handlebars
app.engine('hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine','hbs')



// "use" in express
app.use(express.static('public'))


app.get('/',(req,res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`${projectName} app is running on ${host}`)
})