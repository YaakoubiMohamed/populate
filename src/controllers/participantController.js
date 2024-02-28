const Participant = require('../models/participant')


exports.createParticipant = async (req, res) =>{

    const participant =  new Participant(req.body);
    try{
        await participant.save();
        res.json({data: participant})
    } catch(err){
        console.log("Error");
        res.status(400).send({message: err.message});
    }
}