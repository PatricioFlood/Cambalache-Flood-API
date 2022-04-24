const redis = require('redis')
const { config, logger } = require('../../../utils')

var client = redis.createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT
})

client.on('connect', () => {
  logger.info('Redis connected')
})

client.connect()

module.exports = client