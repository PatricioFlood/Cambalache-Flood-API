const router = require('express').Router()
const userController = require('./userController')
const middlewares = require('../../middlewares')

router.post('/', userController.create)

router.get('/', middlewares.authentication, userController.viewAll)
router.get('/:id', middlewares.authentication, userController.view)
router.put('/:id', middlewares.authentication, userController.update)
router.delete('/:id', middlewares.authentication, userController.remove)

module.exports = router