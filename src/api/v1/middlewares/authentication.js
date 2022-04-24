const { jwtService } = require('../services')

const authentication = async (req, res, next) => {
  const getTokenFromRequest = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

  req.token = getTokenFromRequest(req)
  if(!req.token)
    return res.status(401).json({ error: 'no token provided' })

  const decodedToken = await jwtService.verify(req.token)
  if (!decodedToken)
    return res.status(401).json({ error: 'invalid token' })

  req.userId = decodedToken.userId
  next()
}

module.exports = authentication