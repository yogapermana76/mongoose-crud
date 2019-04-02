const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
  console.log(`listen on port ${port}`)
})