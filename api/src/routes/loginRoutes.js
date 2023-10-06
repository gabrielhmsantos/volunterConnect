const express = require('express');
const router = express.Router();

// Importe os controladores relevantes para o login de ONGs e voluntários
const ongsController = require('../controllers/ongsController');
const voluntariosController = require('../controllers/voluntariosController');

// Rota para processar o formulário de login (POST)
router.post('/', (req, res) => {
  const userType = req.body.tipoLogin; // Obtenha o tipo de usuário (ONG ou voluntário) do selectbox
  const { login, senha } = req.body; // Obtenha os dados de login e senha do formulário

  // Determine qual controlador usar com base no userType
  const controller = userType === 'ong' ? ongsController : voluntariosController;

  // Chame a função de login apropriada do controlador
  controller.login(req, res);
});

module.exports = router;
