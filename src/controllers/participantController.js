const Participant = require('../models/participant')


// **Liste des participants**
exports.listParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json({ success: true, data: participants });
  } catch (error) {
    next(error);
  }
};

// **Afficher un participant**
exports.getParticipant = async (req, res, next) => {
  try {
    const participantId = req.params.id;

    // Vérifiez si l'ID fourni est un ObjectId valide
    if (!mongoose.Types.ObjectId.isValid(participantId)) {
      throw new Error('Invalid participant ID');
    }

    const participant = await Participant.findById(participantId);

    if (!participant) {
      throw new Error('Participant introuvable');
    }

    res.json({ success: true, data: participant });
  } catch (error) {
    next(error); // Pass the error to the middleware
  }
};

// **Créer un participant**
exports.createParticipant = async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.json({ success: true, data: participant });
  } catch (error) {
    next(error);
  }
};

// **Modifier un participant**
exports.updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!participant) {
      throw new Error('Participant introuvable');
    }
    res.json({ success: true, data: participant });
  } catch (error) {
    next(error);
  }
};

// **Supprimer un participant**
exports.deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) {
      throw new Error('Participant introuvable');
    }
    res.json({ success: true, message: 'Participant supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
