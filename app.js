const projectName = 'movie-list-010323'
const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`


app.get('/',(req,res) => {
  res.send('yoooooooo')
})
app.listen(port, () => {
  console.log(`${projectName} app is running on ${host}`)
})