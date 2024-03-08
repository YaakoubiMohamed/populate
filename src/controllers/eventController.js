const Event = require('../models/event')
const Participant = require('../models/participant')

// **Liste des événements**
exports.listEvenements = async (req, res) => {
  try {
    const evenements = await Event.find().populate('participants');
    res.json({ success: true, data: evenements });
  } catch (error) {
    next(error);
  }
};

// **Afficher un événement**
exports.getEvenement = async (req, res) => {
  try {
    const evenement = await Event.findById(req.params.id).populate('participants');
    if (!evenement) {
      throw new Error('Evenement introuvable');
    }
    res.json({ success: true, data: evenement });
  } catch (error) {
    next(error);
  }
};

// **Créer un événement**
exports.createEvenement = async (req, res) => {
  try {
    const evenement = new Event(req.body);
    await evenement.save();
    res.json({ success: true, data: evenement });
  } catch (error) {
    next(error);
  }
};

// **Modifier un événement**
exports.updateEvenement = async (req, res) => {
  try {
    const evenement = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evenement) {
      throw new Error('Evenement introuvable');
    }
    res.json({ success: true, data: evenement });
  } catch (error) {
    next(error);
  }
};

// **Supprimer un événement**
exports.deleteEvenement = async (req, res) => {
  try {
    const evenement = await Event.findByIdAndDelete(req.params.id);
    if (!evenement) {
      throw new Error('Evenement introuvable');
    }
    res.json({ success: true, message: 'Evenement supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
