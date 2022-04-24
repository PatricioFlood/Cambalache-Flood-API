const express = require('express')
const cors = require('cors')
require('express-async-errors')
const routes = require('./routes')
const { unknownEndpoint, errorHandler } = require('./middlewares')
require('./models/associations')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/v1', routes)
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app