const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  res.send('Hello Im tuan tuan !')
})

app.listen(port, () => {
  console.log(`Example app listening on localhost http://localhost:${port}/ `)
})