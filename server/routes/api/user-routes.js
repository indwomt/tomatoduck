const router = require(`express`).Router()
const {
    getUser,
    createUser,
    login,
    saveTodo,
    deleteTodo
} =require(`../../controllers/user-controller`)

const { authMiddleware }= require(`../../utils/auth`)
// .../api/users
router.route(`/`).post(createUser).post(authMiddleware, saveTodo)
// .../api/users/login
router.route(`/login`).post(login)
// .../api/users/me
router.route(`/me`).get(authMiddleware, getUser)
// .../api/users/todos/:todoId
router.route(`/todos/:todoId`).delete(authMiddleware, deleteTodo)

module.exports = router