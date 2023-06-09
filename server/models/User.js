const {Schema, model} = require(`mongoose`)
const bcrypt = require(`bcrypt`)
const todoSchema = require(`./Todo`)

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, `Please enter VALID!!! email address`]
        },
        password: {
            type: String,
            required: true
        },
        todos: [{
            type: Schema.Types.ObjectId,
            ref: `Todo`
        }],
        timePreset: Number
    }
)
 userSchema.pre(`save`, async function (next) { //don't use arrow function!!!
    if(this.isNew || this.isModified(`password`)) {
        const saltRounds = 10 //bcrypt option to set `cost factor`, higher the value longer the processing time
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
 })

 userSchema.methods.verifyPassword = async function (password) {
    return bcrypt.compare(password, this.password)
 }

 const User = model(`User`, userSchema)
 module.exports = User

