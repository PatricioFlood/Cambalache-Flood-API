const router = require('express').Router()
const crudRouter = require('../../routes/crudRouter')
const repositoryController = require('./repositoryController')
const middlewares = require('../../middlewares')

router.use(middlewares.authentication)
router.use(crudRouter(repositoryController))

module.exports = router