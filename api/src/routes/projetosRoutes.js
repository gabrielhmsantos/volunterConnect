const express = require('express');
const router = express.Router();
const projetosController = require('../controllers/projetosController');
const { validateProjeto, handleValidationErrors } = require('../middlewares/projetosMiddleware');

// Rota de listagem de projetos (GET)
router.get('/', projetosController.getAllProjetos);

// Rota de criação de projeto (POST) com middleware de validação
router.post('/', validateProjeto, handleValidationErrors, projetosController.createProjeto);

// Rota de atualização de projeto (PUT) com middleware de validação
router.put('/:id', validateProjeto, handleValidationErrors, projetosController.updateProjeto);

// Rota de exclusão de projeto (DELETE)
router.delete('/:id', projetosController.deleteProjeto);

module.exports = router;
