const express = require('express')
require('../services/passport.js')

const PORT = process.env.PORT

const app = express()

require('../routes/authRoutes.js')(app)

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
