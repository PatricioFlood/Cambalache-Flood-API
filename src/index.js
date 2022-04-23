const app = require('./app')
const { config } = require('./utils')

const server = app.listen(
  config.PORT,
  () => console.info(`App listening on port ${config.PORT}`)
)

module.exports = server