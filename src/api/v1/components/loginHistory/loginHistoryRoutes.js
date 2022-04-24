const router = require('express').Router()
const loginHistoryController = require('./loginHistoryController')
const middlewares = require('../../middlewares')

router.post('/', middlewares.authentication, loginHistoryController.create)
router.get('/', middlewares.authentication, loginHistoryController.viewAll)
router.get('/:id', middlewares.authentication, loginHistoryController.view)
router.put('/:id', middlewares.authentication, loginHistoryController.update)
router.delete('/:id', middlewares.authentication, loginHistoryController.remove)

module.exports = router