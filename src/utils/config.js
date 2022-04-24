require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV

const config = {
  NODE_ENV,
  PORT: process.env.PORT || 3000,
  DATABASE_URL: NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ACCESS_TIME: process.env.JWT_ACCESS_TIME,
  REDIS_URL: NODE_ENV === 'test' ? process.env.TEST_REDIS_URL : process.env.REDIS_URL
}

module.exports = config