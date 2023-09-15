const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o middleware cors
const voluntariosRoutes = require('./routes/voluntariosRoutes');

const app = express();

// Use o middleware cors para habilitar CORS
app.use(cors());

app.use(bodyParser.json());

app.use('/api/voluntarios', voluntariosRoutes);

module.exports = app;