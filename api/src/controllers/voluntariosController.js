const voluntarioModel = require('../models/voluntariosModel');

async function getAllVoluntarios(req, res, next) {
  try {
    const voluntarios = await voluntarioModel.getAllVoluntarios();
    res.json(voluntarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
  }
}

async function createVoluntario(req, res, next) {
  try {
    const voluntarioId = await voluntarioModel.createVoluntario(req.body);
    res.status(201).json({ id: voluntarioId });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
  }
}

async function updateVoluntario(req, res, next) {
  const voluntarioId = req.params.id;
  try {
    await voluntarioModel.updateVoluntario(voluntarioId, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
  }
}

async function deleteVoluntario(req, res, next) {
  const voluntarioId = req.params.id;
  try {
    await voluntarioModel.deleteVoluntario(voluntarioId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
  }
}

async function login(req, res) {
  const { login, senha } = req.body;

  try {
    const voluntario = await voluntarioModel.loginVoluntario(login, senha);

    if (voluntario) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ message: 'Login ou senha incorretos' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
  }
}

module.exports = {
  getAllVoluntarios,
  createVoluntario,
  updateVoluntario,
  deleteVoluntario,
  login,
};
