const db = require('../config/db');

// Função para listar todos os voluntários
async function getAllVoluntarios() {
  const conn = await db.getConnection();
  try {
    const [rows] = await conn.query('SELECT * FROM voluntarios');
    return rows;
  } finally {
    conn.release();
  }
}

// Função para criar um novo voluntário
async function createVoluntario(volunteerData) {
  const conn = await db.getConnection();
  try {
    const [result] = await conn.query('INSERT INTO voluntarios SET ?', volunteerData);
    return result.insertId;
  } finally {
    conn.release();
  }
}

// Função para atualizar um voluntário existente
async function updateVoluntario(volunteerId, updatedData) {
  const conn = await db.getConnection();
  try {
    await conn.query('UPDATE voluntarios SET ? WHERE idvoluntarios = ?', [updatedData, volunteerId]);
  } finally {
    conn.release();
  }
}

// Função para excluir um voluntário
async function deleteVoluntario(volunteerId) {
  const conn = await db.getConnection();
  try {
    await conn.query('DELETE FROM voluntarios WHERE idvoluntarios = ?', volunteerId);
  } finally {
    conn.release();
  }
}

module.exports = {
  getAllVoluntarios,
  createVoluntario,
  updateVoluntario,
  deleteVoluntario,
};