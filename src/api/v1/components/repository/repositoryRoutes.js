const router = require('express').Router()
const crudRouter = require('../../routes/crudRouter')
const repositoryController = require('./repositoryController')

router.use(crudRouter(repositoryController))

module.exports = router