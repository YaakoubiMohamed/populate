const Participant = require('../models/participant')
const mongoose  = require("mongoose");

// **Liste des participants**
exports.listParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json({ success: true, data: participants });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
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
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};

// **Créer un participant**
exports.createParticipant = async (req, res, next) => {
  try {
    // Crée une nouvelle instance de Participant à partir des données de la requête
    const participant = new Participant(req.body);

    // Enregistre le participant dans la base de données
    await participant.save();

    // Renvoie une réponse JSON indiquant le succès de la création et les données du participant
    res.status(201).json({ success: true, message: "Participant créé avec succès", data: participant });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};

// **Modifier un participant**
exports.updateParticipant = async (req, res, next) => {
  try {
    // Trouve et met à jour le participant avec l'ID spécifié
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!participant) {
      // Si le participant n'est pas trouvé, renvoie une erreur 404
      return res.status(404).json({ success: false, message: "Participant introuvable" });
    }

    // Renvoie une réponse JSON indiquant le succès de la mise à jour et les données du participant mis à jour
    res.status(200).json({ success: true, message: "Participant mis à jour avec succès", data: participant });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};

// **Supprimer un participant**
exports.deleteParticipant = async (req, res, next) => {
  try {
    // Trouve et supprime le participant avec l'ID spécifié
    const participant = await Participant.findByIdAndDelete(req.params.id);

    if (!participant) {
      // Si le participant n'est pas trouvé, renvoie une erreur 404
      return res.status(404).json({ success: false, message: "Participant introuvable" });
    }

    // Renvoie une réponse JSON indiquant le succès de la suppression
    res.status(200).json({ success: true, message: "Participant supprimé avec succès" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};
