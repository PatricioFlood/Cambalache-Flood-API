const router = require('express').Router()
const crudRouter = require('./crudRouter')
const userController = require('../components/user/userController')
const loginHistoryController = require('../components/loginHistory/loginHistoryController')
const repositoryController = require('../components/repository/repositoryController')
const loginController = require('../components/login/loginController')

router.use('/login', loginController.login)
router.use('/users', crudRouter(userController))
router.use('/loginHistories', crudRouter(loginHistoryController))
router.use('/repositories', crudRouter(repositoryController))

module.exports = router