const router = require('express').Router()
const repositoryController = require('./repositoryController')
const middlewares = require('../../middlewares')

router.post('/', middlewares.authentication, repositoryController.create)
router.get('/', middlewares.authentication, repositoryController.viewAll)
router.get('/:id', middlewares.authentication, repositoryController.view)
router.put('/:id', middlewares.authentication, repositoryController.update)
router.delete('/:id', middlewares.authentication, repositoryController.remove)


module.exports = router