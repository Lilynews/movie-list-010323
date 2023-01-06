// load mongoose 
const mongoose = require('mongoose')

////// setting DB connection
// config-variable-setting, only for non-production environment
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })

// DB connected status
const db = mongoose.connection
db.on('error', ()=> {
  console.log('mongoDB connected error!')
})
db.once('open', ()=>{
  console.log('mongoDB connected!')
})

module.exports = db
