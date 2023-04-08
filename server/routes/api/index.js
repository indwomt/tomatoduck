const router = require(`express`).Router()
const userRoutes = require(`./user-routes`)
const chatBotRoute = require(`./chat-bot`)
 router.use(`/users`, userRoutes)
router.use('/chatbot', chatBotRoute)
 module.exports = router