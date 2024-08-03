const asyncHandler = require('express-async-handler')

const Goal = require('../modal/goalModal')

const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const getGoalById = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400)
        throw new Error('Incorrect Id')
    }
    res.status(200).json(goal);
}

)

const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })

    res.json(goal);
})

const updateGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal not found')
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

    await Goal.deleteOne(goal)

    res.json({id: req.params.id})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    getGoalById
}