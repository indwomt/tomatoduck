const {Schema, Types} = require(`mongoose`)

const todoSchema = new Schema({
    todoId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    todo: {
        type: String,
        maxLength: 250
    },
    created: {
        type: Date,
        default: Date.now
    }
})
 module.exports = todoSchema