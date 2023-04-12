const {User, Todo } = require(`../models`)
const { signToken } = require("../utils/auth")

module.exports = {
    async getUser({user = null, params}, res){
        const me = await User.findOne({
            $or: [{_id: user ? user._id : params.id}, {username: params.username}]
        }).populate({path: `todos`, select: `-__v`})
        !me
            ? res.status(400).json({message: `user not found`})
            : res.status(200).json(me)
    },
    async createUser ({body}, res){
        const user = await User.create(body)
        if(!user){
            return res.json(400).json({message: `something went wrong!!!`})}
        const token = signToken(user)
        res.json( {token, user})
    },
    async login({body}, res){
         const user = await User.findOne({
            $or: [{username: body.username}, {email: body.email}]
         })
         if(!user){
            return res.status(400).json({message: `user not found`})}
         const validPassword = await user.verifyPassword(body.password)
         if(!validPassword){
            return res.status(400).json({message: `wrong password`})}
         const token = signToken(user)
         res.json( {token, user})

    },
    async saveTodo({user, body}, res){

        try {
            const newTodo = await Todo.create(body)
            const addTodo = await User.findOneAndUpdate(
                {_id: user._id},
                {$addToSet: {todos: newTodo._id}},
                {new: true, runValidators: true}
            )
            return res.json(addTodo)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    async deleteTodo({params}, res){
        const taskDel = await Todo.findByIdAndRemove({_id: params._id})
            const rmTodo = await User.findOneAndUpdate(
            {todos: params._id},
            {$pull: {todos: params._id}},
            {new: true}
        )
        !rmTodo
            ? res.status(400).json({message: `no item found`})
            : res.json({message: `task deleted`})
    }
}