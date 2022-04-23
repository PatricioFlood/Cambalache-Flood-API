const { Sequelize } = require('sequelize')
const config = require('../utils/config')

const dialectOptions = {}
if(config.NODE_ENV === 'production')
  dialectOptions.ssl = { rejectUnauthorized: false }

const sequelize = new Sequelize(config.DATABASE_URL, {
  logging: false,
  dialectOptions
})

sequelize.authenticate()
  .then(() => console.info('Connection to DB has been established successfully.'))
  .catch(error => console.info('Unable to connect to the database:', error))

module.exports = sequelize