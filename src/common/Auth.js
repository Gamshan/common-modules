// class Auth {
//
//     static saveToken (token) {
//         localStorage.setItem('wavy-token', JSON.stringify(token))
//     }
//
//     static getToken () {
//         return JSON.parse(localStorage.getItem('wavy-token'))
//     }
//
//     static saveUser (user) {
//         localStorage.setItem('wavy-user', JSON.stringify(user))
//     }
//
//     static getUser () {
//         return JSON.parse(localStorage.getItem('wavy-user'))
//     }
//
//     static isAccessToken () {
//         const token = JSON.parse(localStorage.getItem('wavy-token'))
//         return !!token ? !!token : false
//     }
//
//     static getRoles () {
//         const user = JSON.parse(localStorage.getItem('wavy-user'))
//         return !!user && !!user.roles ? user.roles : []
//     }
//
//     static getUserType () {
//         const user = JSON.parse(localStorage.getItem('wavy-user'))
//         return !!user && !!user.userType ? user.userType : ''
//     }
//
//     static clearAll () {
//         localStorage.removeItem('wavy-token')
//         localStorage.removeItem('wavy-user')
//     }
//
//
//     static getUserId () {
//         const user = JSON.parse(localStorage.getItem('wavy-user'))
//         return !!user && !!user._id ? user._id : ''
//     }
// }
//
// export default Auth
