const express = require('express')
const router = express.Router()
const moviesDB = require("../../models/movieSchema")

// detail-dynamic-router(DB)
router.get("/:movie_id", (req, res) => {
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

module.exports = router