const { logger } = require('../../../utils')

const errorHandler = (error, _request, response, _next) => {
  switch(error.name){
  case 'SequelizeValidationError': {
    const errorMessage = error.message.split(': ')

    if(errorMessage[0] && errorMessage[0] === 'notNull Violation')
      error = `${error.errors[0].path} is required`
    else
      error = errorMessage[1] || error.message

    return response.status(400).json({ error })
  }

  case 'SequelizeUniqueConstraintError':
    return response.status(400).json({
      error: `${error.original.constraint} already exists`,
    })

  case 'SequelizeForeignKeyConstraintError':
    return response.status(400).json({
      error: `${error.original.constraint} ID not exists`,
    })

  case 'SequelizeDatabaseError':
    return response.status(400).json({
      error: 'malformed field'
    })

  case 'JsonWebTokenError':
    return response.status(401).json({
      error: 'invalid token'
    })

  case 'TokenExpiredError':
    return response.status(401).json({
      error: 'token expired'
    })

  case 'SyntaxError':
    if(error.status === 400 && 'body' in error)
      return response.status(400).json({ error: 'malformed body' })
    /* falls through */

  default:
    logger.error(error)
    return response.status(500).json({ error: 'server error' })
  }
}

module.exports = errorHandler