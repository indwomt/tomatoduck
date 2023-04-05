 import decode from 'jwt-decode'

 class AuthService {
    getProfile = () => decode(this.getToken) //get user data from token
    loggedIn = () => {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }
    isTokenExpired = (token) => { //check if tokens expired
        try {
            const decoded = decode(token)
            if(decoded.exp < Date.now() /10000){
                return true
            } else return false
        } catch (error) {
            return false
        }
    }
    getToken = () => localStorage.getItem(`id_token`)
    login = () => {
        localStorage.setItem(`id_token`)
        window.location.assign
    }
    logout = () => {
        localStorage.removeItem(`id_token`)
        window.location.assign
    }
 }

 export default new AuthService()