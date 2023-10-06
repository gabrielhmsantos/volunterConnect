const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o middleware cors
const voluntariosRoutes = require('./routes/voluntariosRoutes');
const ongsRoutes = require('./routes/ongsRoutes');
const projetosRoutes = require('./routes/projetosRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

// Use o middleware cors para habilitar CORS
app.use(cors());

app.use(bodyParser.json());

app.use('/api/voluntarios', voluntariosRoutes);
app.use('/api/ongs', ongsRoutes);
app.use('/api/projetos', projetosRoutes);
app.use('/login', loginRoutes);

module.exports = app;