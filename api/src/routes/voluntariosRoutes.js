const express = require('express');
const router = express.Router();
const voluntariosController = require('../controllers/voluntariosController');
const { validateVoluntario, handleValidationErrors } = require('../middlewares/voluntariosMiddleware');

// Rota de listagem de voluntários (GET)
router.get('/', voluntariosController.getAllVoluntarios);

// Rota de criação de voluntário (POST) com middleware de validação
router.post('/', validateVoluntario, handleValidationErrors, voluntariosController.createVoluntario);

// Rota de atualização de voluntário (PUT) com middleware de validação
router.put('/:id', validateVoluntario, handleValidationErrors, voluntariosController.updateVoluntario);

// Rota de exclusão de voluntário (DELETE)
router.delete('/:id', voluntariosController.deleteVoluntario);

module.exports = router;