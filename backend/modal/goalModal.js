const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema(
    {text : String},
    {timestamps: true}
);

module.exports = mongoose.model('Goal', goalSchema)