import axios from 'axios'

const createRoute = "https://goal-setter-backend-seven.vercel.app/api/goals";

// https://goal-setter-backend-snfw.onrender.com/api/goals
const getRoute = "https://goal-setter-backend-seven.vercel.app/api/goals"




// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(createRoute, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(getRoute, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(`https://goal-setter-backend-seven.vercel.app/api/goals/${goalId}`, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
