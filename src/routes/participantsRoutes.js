const express = require('express');
const router = express.Router();
const participentController = require('../controllers/participantController');



// **Liste des participants**
router.get('/', participentController.listParticipants);

// **Afficher un participant**
router.get('/:id', participentController.getParticipant);

// **Créer un participant**
router.post('/', participentController.createParticipant);

// **Modifier un participant**
router.put('/:id', participentController.updateParticipant);

// **Supprimer un participant**
router.delete('/:id', participentController.deleteParticipant);

module.exports = router;
