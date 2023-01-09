//////// load 3-rd-party-tools, variable
const projectName = "movie-list-010323"
const express = require("express")
const app = express()
const port = 3000
const host = `http://localhost:${port}`
const exphbs = require("express-handlebars")
require("./config/mongoose")
const moviesDB = require("./models/movieSchema")


//////// setting express-handlebars
app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: {
    selected: (sortSelected) => {
      if (sortSelected) return "selected"
    }
  }
}))
app.set("view engine", "hbs")

//////// "use" in express
app.use(express.static("public"))

//////// Router


//SearchBar
app.get('/', (req, res) => {
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

// detail-dynamic-router(DB)
app.get("/movies/:movie_id", (req, res) => {
  const id = req.params.movie_id
  console.log(id)
  // is findOne not findById
  return (
    moviesDB
      .findOne({ id })
      // .exec()
      .lean()
      .then((movie) => {
        return res.render("detail", {
          title: 'Movie Detail',
          movie
        })
      })
      .catch(error => {
        console.log(error)
        console.log("dynamic router error")
      })
  )
})




//////// Listener
app.listen(port, () => {
  console.log(`${projectName} app is running on ${host}`)
})
