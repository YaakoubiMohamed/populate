const Event = require('../models/event')

exports.getEvents =  async (req, res) => {
    const events = await Event.find()
    .populate('participants');

    res.json({events: events});
}

exports.createEvents  = async (req, res) =>{
    const event = new Event(req.body);

    try{
        await event.save();
        res.json({message: 'Event created!'})
    }catch(err){
        console.log(err);
        res.status(400).json({message:"unable to create event"});
    }
}