const router = require('express').Router()
const crudRouter = require('../../routes/crudRouter')
const loginHistoryController = require('./loginHistoryController')
const middlewares = require('../../middlewares')

router.use(middlewares.authentication)
router.use(crudRouter(loginHistoryController))

module.exports = router