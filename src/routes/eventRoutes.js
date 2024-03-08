const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// **Liste des événements**
router.get('/', EvenementsController.listEvenements);

// **Afficher un événement**
router.get('/:id', EvenementsController.getEvenement);

// **Créer un événement**
router.post('/', EvenementsController.createEvenement);

// **Modifier un événement**
router.put('/:id', EvenementsController.updateEvenement);

// **Supprimer un événement**
router.delete('/:id', EvenementsController.deleteEvenement);

module.exports = router;
