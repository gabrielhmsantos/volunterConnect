const db = require('../config/db');

// Função para listar todas as ONGs
async function getAllOngs() {
  const conn = await db.getConnection();
  try {
    const [rows] = await conn.query('SELECT * FROM ongs');
    return rows;
  } finally {
    conn.release();
  }
}

// Função para criar uma nova ONG
async function createOng(ongData) {
  const conn = await db.getConnection();
  try {
    const [result] = await conn.query('INSERT INTO ongs SET ?', ongData);
    return result.insertId;
  } finally {
    conn.release();
  }
}

// Função para atualizar uma ONG existente
async function updateOng(ongId, updatedData) {
  const conn = await db.getConnection();
  try {
    await conn.query('UPDATE ongs SET ? WHERE idongs = ?', [updatedData, ongId]);
  } finally {
    conn.release();
  }
}

// Função para excluir uma ONG
async function deleteOng(ongId) {
  const conn = await db.getConnection();
  try {
    await conn.query('DELETE FROM ongs WHERE idongs = ?', ongId);
  } finally {
    conn.release();
  }
}

async function loginOng(login, senha) {
    const conn = await db.getConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM ongs WHERE login = ? AND senha = ?', [login, senha]);
      return rows[0] || null;
    } finally {
      conn.release();
    }
}

module.exports = {
  getAllOngs,
  createOng,
  updateOng,
  deleteOng,
  loginOng,
};
