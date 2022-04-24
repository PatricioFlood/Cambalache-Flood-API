const router = require('express').Router()
const repositoryController = require('./repositoryController')
const middlewares = require('../../middlewares')

router.use(middlewares.authentication)

router.post('/', repositoryController.create)
router.get('/', repositoryController.viewAll)
router.get('/:id', repositoryController.view)
router.put('/:id', repositoryController.update)
router.delete('/:id', repositoryController.remove)


module.exports = router