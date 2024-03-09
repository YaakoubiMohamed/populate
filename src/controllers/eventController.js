const Event = require('../models/event')
const Participant = require('../models/participant')

// **Liste des événements**
exports.listEvenements = async (req, res, next) => {
  try {
    // Récupère tous les événements et peuple les participants associés
    const evenements = await Event.find().populate('participants');

    // Renvoie une réponse JSON avec la liste des événements
    res.status(200).json({ success: true, data: evenements });
  } catch (error) {
    // Transmet l'erreur à la fonction middleware suivante
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};


// **Afficher un événement**
exports.getEvenement = async (req, res, next) => {
  try {
    // Récupère l'événement avec l'ID spécifié et peuple les participants associés
    const evenement = await Event.findById(req.params.id).populate('participants');

    if (!evenement) {
      // Si l'événement n'est pas trouvé, renvoie une erreur 404
      return res.status(404).json({ success: false, message: "Evenement introuvable" });
    }

    // Renvoie une réponse JSON avec les données de l'événement
    res.status(200).json({ success: true, data: evenement });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};

// **Créer un événement**
exports.createEvenement = async (req, res, next) => {
  try {
    // Crée un nouvel événement à partir des données de la requête
    const evenement = new Event(req.body);

    // Enregistre l'événement dans la base de données
    await evenement.save();

    // Renvoie une réponse JSON avec le succès de la création et les données de l'événement
    res.status(201).json({ success: true, message: "Evenement créé avec succès", data: evenement });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};


// **Modifier un événement**
exports.updateEvenement = async (req, res, next) => {
  try {
    // Trouve et met à jour l'événement avec l'ID spécifié
    const evenement = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!evenement) {
      // Si l'événement n'est pas trouvé, renvoie une erreur 404
      return res.status(404).json({ success: false, message: "Evenement introuvable" });
    }

    // Renvoie une réponse JSON avec le succès de la mise à jour et les données de l'événement
    res.status(200).json({ success: true, message: "Evenement mis à jour avec succès", data: evenement });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};


// **Supprimer un événement**
exports.deleteEvenement = async (req, res, next) => {
  try {
    // Trouve et supprime l'événement avec l'ID spécifié
    const evenement = await Event.findByIdAndDelete(req.params.id);

    if (!evenement) {
      // Si l'événement n'est pas trouvé, renvoie une erreur 404
      return res.status(404).json({ success: false, message: "Evenement introuvable" });
    }

    // Renvoie une réponse JSON indiquant le succès de la suppression
    res.status(200).json({ success: true, message: "Evenement supprimé avec succès" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
};

exports.searchEvenements = async (req, res, next) => {
  try {
    // Récupère le nom de recherche à partir des paramètres de la requête
    const nom = req.query.nom;
    const description  = req.query.description;
    console.log(nom, description)

    // Effectue la recherche d'événements par nom
    const evenements = await Event.find({ nom: { $regex: nom, $options: 'i' } });

    // Effectue la recherche d'événements par nom ou description
    // const evenements = await Event.find({
    //   $or: [
    //     { nom: { $regex: nom, $options: 'i' } },
    //     { description: { $regex: description, $options: 'i' } }
    //   ]
    // });

    // Renvoie une réponse JSON avec la liste des événements trouvés
    res.status(200).json({ success: true, data: evenements });
  } catch (error) {
    // Transmet l'erreur à la fonction middleware suivante
    next(error);
  }
};
