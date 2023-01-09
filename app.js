//////// load 3-rd-party-tools, variable
const projectName = "movie-list-010323"
const { request } = require("express")
const express = require("express")
const app = express()
const port = 3000
const host = `http://localhost:${port}`
const exphbs = require("express-handlebars")
require("./config/mongoose")
const routes = require('./routes')


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
app.use(routes)


//////// Listener
app.listen(port, () => {
  console.log(`${projectName} app is running on ${host}`)
})
