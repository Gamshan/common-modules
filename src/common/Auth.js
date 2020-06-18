import {getSafeValues} from "./Functions";

class Auth {

    static  appName;


    static saveToken (token) {
        localStorage.setItem(this.appName + '-token', JSON.stringify(token))
    }

    static getToken () {
        return JSON.parse(localStorage.getItem(this.appName + '-token'))
    }

    static saveUser (user) {
        localStorage.setItem(this.appName + '-user', JSON.stringify(user))
    }

    static getUser () {
        return JSON.parse(localStorage.getItem(this.appName + '-user'))
    }

    static isAccessToken () {
        const token = JSON.parse(localStorage.getItem(this.appName + '-token'))
        return !!token ? !!token : false
    }

    static getRoles () {
        const user = JSON.parse(localStorage.getItem(this.appName + '-user'))
        return !!user && !!user.roles ? user.roles : []
    }

    static getUserType () {
        const user = JSON.parse(localStorage.getItem(this.appName+'-user'))
        return !!user && !!user.userType ? user.userType : ''
    }

    static clearAll () {
        localStorage.removeItem(this.appName+'-token')
        localStorage.removeItem(this.appName+'-user')
    }


    static getUserId () {
        console.log(this.appName,'  sssssss')
        const user = JSON.parse(localStorage.getItem(this.appName+'-user'))
        return !!user && !!user._id ? user._id : ''
    }
}

export default Auth
