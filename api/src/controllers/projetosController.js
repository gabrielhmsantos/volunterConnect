const projetoModel = require('../models/projetosModel');

// Função para listar todos os projetos
async function getAllProjetos(req, res, next) {
  try {
    const projetos = await projetoModel.getAllProjetos();
    res.json(projetos);
  } catch (error) {
    next(error);
  }
}

// Função para criar um novo projeto
async function createProjeto(req, res, next) {
  try {
    const projetoId = await projetoModel.createProjeto(req.body);
    res.status(201).json({ id: projetoId });
  } catch (error) {
    next(error);
  }
}

// Função para atualizar um projeto existente
async function updateProjeto(req, res, next) {
  const projetoId = req.params.id;
  try {
    await projetoModel.updateProjeto(projetoId, req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

// Função para excluir um projeto
async function deleteProjeto(req, res, next) {
  const projetoId = req.params.id;
  try {
    await projetoModel.deleteProjeto(projetoId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProjetos,
  createProjeto,
  updateProjeto,
  deleteProjeto,
};
