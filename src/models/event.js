const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    nom:{
        type: String,
        required:  true,
    },
    date:{
        type: Date,
        required:  true,
    },
    lieu:{
        type: String,
        required:  true,
    },
    description:{
        type:String,
        required:  false,
    },
    participants:[{
        type: mongoose.Types.ObjectId,
        ref:'Participant',
        unique: true
    }]
})

const  Event = mongoose.model("Event",eventSchema)
module.exports= Event;