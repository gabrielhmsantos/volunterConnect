const ongModel = require('../models/ongsModel');

async function getAllOngs(req, res, next) {
  try {
    const ongs = await ongModel.getAllOngs();
    res.json(ongs);
  } catch (error) {
    next(error);
  }
}

async function createOng(req, res, next) {
  try {
    const ongId = await ongModel.createOng(req.body);
    res.status(201).json({ id: ongId });
  } catch (error) {
    next(error);
  }
}

async function updateOng(req, res, next) {
  const ongId = req.params.id;
  try {
    await ongModel.updateOng(ongId, req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

async function deleteOng(req, res, next) {
  const ongId = req.params.id;
  try {
    await ongModel.deleteOng(ongId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

async function login(req, res) {
    const { login, senha } = req.body;
  
    // Chame a função de login apropriada do modelo
    const ong = await ongModel.loginOng(login, senha);
  
    if (ong) {
      // Login bem-sucedido
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      // Login falhou
      res.status(401).json({ message: 'Login ou senha incorretos' });
    }
}

module.exports = {
  getAllOngs,
  createOng,
  updateOng,
  deleteOng,
  login,
};
