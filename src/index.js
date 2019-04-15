const express = require('express')
const mongoose = require('mongoose')

require('../models/User.js')

require('../services/passport.js')

const { mongoURI } = require('../config/keys.js')

mongoose.connect(mongoURI, {
  useNewUrlParser: true
})

const PORT = process.env.PORT

const app = express()

require('../routes/authRoutes.js')(app)

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
