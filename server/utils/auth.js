const jwt = require(`jsonwebtoken`)

const secret = process.env.SECRET
const expiration = `1h`

module.exports = {
    authMiddleware: (req, res, next) => {
        let token = req.query.token || req.headers.authorization
        if(req.headers.authorization){
            token = token.split(` `).pop().trim()
        }
        if(!token) {
            return res.status(400).json({message: `authorization required`})
        }
        try {
            const {data} = jwt.verify(token, secret, {maxAge: expiration})
            req.user = data
        } catch (error) {
            return res.status(400).json({message: `token is no bueno`})
        }
        next()
    },
    signToken: ({username, _id})=> {
        const payload = {username, _id}
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}