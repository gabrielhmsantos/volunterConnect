const voluntarioModel = require('../models/voluntariosModel');

async function getAllVoluntarios(req, res, next) {
  try {
    const voluntarios = await voluntarioModel.getAllVoluntarios();
    res.json(voluntarios);
  } catch (error) {
    next(error);
  }
}

async function createVoluntario(req, res, next) {
  try {
    const voluntarioId = await voluntarioModel.createVoluntario(req.body);
    res.status(201).json({ id: voluntarioId });
  } catch (error) {
    next(error);
  }
}

async function updateVoluntario(req, res, next) {
  const voluntarioId = req.params.id;
  try {
    await voluntarioModel.updateVoluntario(voluntarioId, req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

async function deleteVoluntario(req, res, next) {
  const voluntarioId = req.params.id;
  try {
    await voluntarioModel.deleteVoluntario(voluntarioId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

async function login(req, res) {
  const { login, senha } = req.body;

  // Chame a função de login apropriada do modelo
  const voluntario = await voluntarioModel.loginVoluntario(login, senha);

  if (voluntario) {
    // Login bem-sucedido
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    // Login falhou
    res.status(401).json({ message: 'Login ou senha incorretos' });
  }
}

module.exports = {
  getAllVoluntarios,
  createVoluntario,
  updateVoluntario,
  deleteVoluntario,
  login,
};