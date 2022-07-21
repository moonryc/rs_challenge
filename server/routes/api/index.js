const router = require('express').Router()
const nbaRoutes = require('./nbaRoutes')
const weatherRoutes = require('./weatherRoutes')

router.use('/nba', nbaRoutes)
router.use('/weather', weatherRoutes)

module.exports = router
