const express = require('express')
const cors = require('cors')
require('express-async-errors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', (req, res) => res.send('Hello World'))

module.exports = app