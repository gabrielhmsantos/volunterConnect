const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10, // Defina o número máximo de conexões permitidas no pool
};

const pool = mysql.createPool(dbConfig);

// Função para obter uma conexão do pool
async function getConnection() {
  return pool.getConnection();
}

module.exports = {
  getConnection,
};