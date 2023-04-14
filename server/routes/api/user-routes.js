const router = require(`express`).Router()
const {
    getUser,
    createUser,
    login,
    saveTodo,
    deleteTodo,
    updateTodo
} =require(`../../controllers/user-controller`)

const { authMiddleware }= require(`../../utils/auth`)
// .../api/users
router.route(`/`).post(createUser)
// .../api/users/login
router.route(`/login`).post(login)
// .../api/users/me
router.route(`/me`).get(authMiddleware, getUser)
// .../api/users/todos
router.route(`/todos`).post(authMiddleware, saveTodo)
// .../api/users/todos/:todoId
router.route(`/todos/:_id`).delete(authMiddleware, deleteTodo).put(authMiddleware, updateTodo)

module.exports = router