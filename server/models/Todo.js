const {Schema, model} = require(`mongoose`)

const todoSchema = new Schema({
    todo: {
        type: String,
        maxLength: 250
    },
    created: {
        type: Date,
        default: Date.now
    }
})
const Todo = model(`Todo`, todoSchema)
 module.exports = Todo