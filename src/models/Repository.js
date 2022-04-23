const { DataTypes } = require('sequelize')
const { sequelize } =  require('../services')

const Repository = sequelize.define('repositories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  projectName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  language: {
    type: DataTypes.ENUM(languages),
    allowNull: false
  },
  creationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  }
})

const languages = [
  'html',
  'css',
  'javascript',
  'python',
  'java',
  'c++',
  'php',
]

module.exports = Repository