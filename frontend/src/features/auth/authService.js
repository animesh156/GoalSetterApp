import axios from 'axios'

const registerRoute = "https://goal-setter-backend-seven.vercel.app/api/users/register"

const loginRoute =    "https://goal-setter-backend-seven.vercel.app/api/users/login"


// Register user
const register = async (userData) => {
  const response = await axios.post(registerRoute, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(loginRoute, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
