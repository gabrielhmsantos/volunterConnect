const db = require('../config/db');

// Função para listar todos os projetos
async function getAllProjetos() {
  const conn = await db.getConnection();
  try {
    const [rows] = await conn.query('SELECT * FROM projetos');
    return rows;
  } finally {
    conn.release();
  }
}

// Função para criar um novo projeto
async function createProjeto(projetoData) {
  const conn = await db.getConnection();
  try {
    const [result] = await conn.query('INSERT INTO projetos SET ?', projetoData);
    return result.insertId;
  } finally {
    conn.release();
  }
}

// Função para atualizar um projeto existente
async function updateProjeto(projetoId, updatedData) {
  const conn = await db.getConnection();
  try {
    await conn.query('UPDATE projetos SET ? WHERE idprojetos = ?', [updatedData, projetoId]);
  } finally {
    conn.release();
  }
}

// Função para excluir um projeto
async function deleteProjeto(projetoId) {
  const conn = await db.getConnection();
  try {
    await conn.query('DELETE FROM projetos WHERE idprojetos = ?', projetoId);
  } finally {
    conn.release();
  }
}

module.exports = {
  getAllProjetos,
  createProjeto,
  updateProjeto,
  deleteProjeto,
};
