const router = require('express').Router()
const userController = require('./userController')
const middlewares = require('../../middlewares')

router.post('/', userController.create)

router.use(middlewares.authentication)
router.get('/', userController.viewAll)
router.get('/:id', userController.view)
router.put('/:id', userController.update)
router.delete('/:id', userController.remove)

module.exports = router