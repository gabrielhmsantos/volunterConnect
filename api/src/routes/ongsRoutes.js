const express = require('express');
const router = express.Router();
const ongsController = require('../controllers/ongsController');
const { validateOng, handleValidationErrors } = require('../middlewares/ongsMiddleware');

// Rota de listagem de ONGs (GET)
router.get('/', ongsController.getAllOngs);

// Rota de criação de ONG (POST) com middleware de validação
router.post('/', validateOng, handleValidationErrors, ongsController.createOng);

// Rota de atualização de ONG (PUT) com middleware de validação
router.put('/:id', validateOng, handleValidationErrors, ongsController.updateOng);

// Rota de exclusão de ONG (DELETE)
router.delete('/:id', ongsController.deleteOng);

module.exports = router;
