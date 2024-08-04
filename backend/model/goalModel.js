const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
    },

    text: {
        type: String
    },
},
   
    {timestamps: true}
);

module.exports = mongoose.model('Goal', goalSchema)