 import decode from 'jwt-decode'

 class AuthService {
    getProfile = () => decode(this.getToken) //get user data from token
    loggedIn = () => {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }
    isTokenExpired = (token) => { //check if tokens expired
        
            const decoded = decode(token)
            let currentTime = Date.now() /1000
            if(decoded.exp < currentTime){
                localStorage.removeItem('id_token')
                return true
            } else return false
        }
        
    getToken = () => localStorage.getItem(`id_token`)
    login = (token) => {
        localStorage.setItem(`id_token`, token)
        window.location.assign(`/`)
    }
    logout = () => {
        localStorage.removeItem(`id_token`)
        window.location.assign(`/`)
    }
 }

 export default new AuthService()