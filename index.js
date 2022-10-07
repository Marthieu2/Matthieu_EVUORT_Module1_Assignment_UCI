const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello Teacher</h1><h2>I hope you are doing well !</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}\nSearch on your website localhost:${port}`)
})