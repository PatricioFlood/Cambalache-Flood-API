const router = require('express').Router()
const crudRouter = require('../../routes/crudRouter')
const userController = require('./userController')

router.use(crudRouter(userController))

module.exports = router