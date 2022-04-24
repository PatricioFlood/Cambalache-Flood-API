const redis = require('redis')
const { config, logger } = require('../../../utils')

var client = redis.createClient({ url: config.REDIS_URL })

client.on('connect', () => {
  logger.info('Redis connected')
})

client.connect()

module.exports = client