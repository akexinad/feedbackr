const express = require('express')
const mongoose = require('mongoose')
const cookeSession = require('cookie-session')
const passport = require('passport')

require('../models/User.js')
require('../services/passport.js')
const authRoutes = require('../routes/authRoutes.js')
const { mongodbUri, mongodbAtlasUri, cookieKey } = require('../config/keys.js')

mongoose.connect((mongodbAtlasUri), {
  useNewUrlParser: true,
  useCreateIndex: true, // Indexes the data in mongodb, allowing for quicker access.
  useFindAndModify: false
})

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// mongoose.connect((mongodbAtlasUri), {
//   useNewUrlParser: true,
//   useCreateIndex: true, // Indexes the data in mongodb, allowing for quicker access.
//   useFindAndModify: false
// })

const PORT = 3001
=======
const PORT = process.env.PORT | 3001
>>>>>>> 2f8614d... added env port
=======
const PORT = process.env.PORT || 3001
>>>>>>> d5c2d98... fixed env port
=======
const PORT = process.env.PORT || 3001
>>>>>>> 3e39ce486fed820ae757fd32e92ceea1ac3c34b3
const app = express()

// CONNECTING MIDDLEWARES
app.use(
  cookeSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
