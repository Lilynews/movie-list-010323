const mongoose = require('mongoose')
const Schema = mongoose.Schema
const movieSchema = new Schema ({
  id: Number,
  title: String,
  genres: [Number],
  description: String,
  release_date: String,
  image: String
})

module.exports = mongoose.model('Movie', movieSchema)