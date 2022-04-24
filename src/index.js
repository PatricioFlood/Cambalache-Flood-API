const app = require('./api/v1/app')
const { config, logger } = require('./utils')

const server = app.listen(
  config.PORT,
  () => logger.info(`App listening on port ${config.PORT}`)
)

module.exports = server