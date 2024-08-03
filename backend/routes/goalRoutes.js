const express = require('express');
const router = express.Router();
const {getGoals, updateGoal, setGoal, deleteGoal, getGoalById} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)

router.route('/:id').get(getGoalById).put(updateGoal).delete(deleteGoal)


module.exports = router;