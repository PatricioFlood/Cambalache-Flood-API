const jwt = require('jsonwebtoken')
const config = require('../../../utils/config')
const redisClient = require('./redis')

const jwtService = {
  sign: (body) => jwt.sign(body, config.JWT_SECRET, { expiresIn: config.JWT_ACCESS_TIME }),
  verify: async (token) => {
    const inBlackList = await redisClient.get(`bl_${token}`)

    return inBlackList ? null : jwt.verify(token, config.JWT_SECRET)
  },
  revoke: async (token) => {
    await redisClient.set(`bl_${token}`, true)
  }
}

module.exports = jwtService