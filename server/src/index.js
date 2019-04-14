const express = require('express')
// The reason we use require instead of import is because import belongs to ES2015 and node does not support that YET

const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  res.send({
    hello: "world"
  })
})

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
