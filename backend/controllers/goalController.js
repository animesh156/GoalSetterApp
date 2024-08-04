const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')

const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})



const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.json(goal);
})

const updateGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(401);
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

// check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
//    make sure logged in user matches goal user
      if(goal.user.toString() !== user.id){
      res.status(401)
      throw new Error('user not authorized')
      }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // check for user
        if(!user){
            res.status(401)
            throw new Error('User not found')
        }
    //    make sure logged in user matches goal user
          if(goal.user.toString() !== user.id){
          res.status(401)
          throw new Error('user not authorized')
          }

    await Goal.deleteOne(goal)

    res.json({id: req.params.id})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
   
}