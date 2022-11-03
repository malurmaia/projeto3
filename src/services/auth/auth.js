const userIsLoggedIn = (navigate) => {
    if (!true){
      window.location.href = '/login'
    }
}
const login = (email, password) => {
    return 'login'
}
const register = (username, email, password) => {
    return 'login'
}
const logout = () => {
    return 'Logout'
}

module.exports = {
    userIsLoggedIn,
    login,
    register,
    logout,
};