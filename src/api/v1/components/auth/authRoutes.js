const router = require('express').Router()
const authController = require('./authController')
const middlewares = require('../../middlewares')

router.post('/login', authController.login)
router.post('/logout', middlewares.authentication, authController.logout)

module.exports = router