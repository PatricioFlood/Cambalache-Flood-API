require('dotenv').config()

const PORT = process.env.PORT || 3000
const { 
  DATABASE_URL
} = process.env

module.exports = {
  PORT,
  DATABASE_URL
}