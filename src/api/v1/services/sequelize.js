const { Sequelize } = require('sequelize')
const { config, logger } = require('../../../utils')

const dialectOptions = {}
if(config.NODE_ENV === 'production')
  dialectOptions.ssl = { rejectUnauthorized: false }

const sequelize = new Sequelize(config.DATABASE_URL, {
  logging: false,
  dialectOptions
})

sequelize.authenticate()
  .then(() => logger.info('Connection to DB has been established successfully.'))
  .catch(error => logger.info('Unable to connect to the database:', error))

sequelize.sync()
  .then( () => logger.info('DB synced successfully.'))
  .catch( error => logger.info('Unable to sync database: ', error))

module.exports = sequelize