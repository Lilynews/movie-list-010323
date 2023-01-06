const movieSchema = require('../movieSchema')
// const movieSeeder = require('./movies.json').results
const movieSeeder = require('./moviesData.json').results
const db = require('../../config/mongoose')

//setting db status when load seeder 
db.once('open', ()=> {
  // movieSchema.create(movieSeeder)
  console.log('DB Seeder finished!')
})
