require('dotenv').config()

const config = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ACCESS_TIME: process.env.JWT_ACCESS_TIME,
  REDIST_HOST: process.env.REDIST_HOST,
  REDIST_PORT: process.env.REDIST_PORT
}

module.exports = config