const express = require('express');
const router = express.Router();
const participentController = require('../controllers/participantController');



// **Liste des participants**
router.get('/', ParticipantsController.listParticipants);

// **Afficher un participant**
router.get('/:id', ParticipantsController.getParticipant);

// **Créer un participant**
router.post('/', ParticipantsController.createParticipant);

// **Modifier un participant**
router.put('/:id', ParticipantsController.updateParticipant);

// **Supprimer un participant**
router.delete('/:id', ParticipantsController.deleteParticipant);

module.exports = router;
