const express = require('express')
const app = express()
const path = require('node:path')
module.exports = app

const absolutePathIndex = path.join(__dirname, 'views', 'index.html')
const absolutePathCss = path.join(__dirname, 'public')

/*
app.get('/', function (req, res) {
  res.send('Hello Express')
})
*/

// show index
app.get('/', function (req, res) {
  res.sendFile(absolutePathIndex)
})

// access style.css
app.use('/public', express.static(absolutePathCss))

app.get('/json', function (req, res) {
  res.json({ message: 'Hello json' })
})
