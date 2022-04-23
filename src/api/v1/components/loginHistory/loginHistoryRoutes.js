const router = require('express').Router()
const crudRouter = require('../../routes/crudRouter')
const loginHistoryController = require('./loginHistoryController')

router.use(crudRouter(loginHistoryController))

module.exports = router