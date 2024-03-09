const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// **Liste des événements**
router.get('/', eventController.listEvenements);

// **Afficher un événement**
router.get('/:id', eventController.getEvenement);

// **Créer un événement**
router.post('/', eventController.createEvenement);

// **Modifier un événement**
router.put('/:id', eventController.updateEvenement);

// **Supprimer un événement**
router.delete('/:id', eventController.deleteEvenement);

module.exports = router;
