const router = require('express').Router()
const userRoutes = require('../components/user/userRoutes')
const loginHistoryRoutes = require('../components/loginHistory/loginHistoryRoutes')
const repositoryRoutes = require('../components/repository/repositoryRoutes')
const authRoutes = require('../components/auth/authRoutes')
const { swagger } = require('../services')

router.use('/api-docs', swagger.serve)
router.get('/api-docs', swagger.docs)

router.use(authRoutes)
router.use('/users', userRoutes)
router.use('/loginHistories', loginHistoryRoutes)
router.use('/repositories', repositoryRoutes)

module.exports = router