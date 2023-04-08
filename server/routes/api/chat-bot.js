const router = require(`express`).Router()
const {cbRequest} = require(`../../controllers/chatbot`)
router.route(`/`).post(cbRequest)
module.exports = router