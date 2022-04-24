const router = require('express').Router()
const loginHistoryController = require('./loginHistoryController')
const middlewares = require('../../middlewares')

router.use(middlewares.authentication)

router.post('/', loginHistoryController.create)
router.get('/', loginHistoryController.viewAll)
router.get('/:id', loginHistoryController.view)
router.put('/:id', loginHistoryController.update)
router.delete('/:id', loginHistoryController.remove)

module.exports = router