// Função express para criar abstrações de rotas
const express = require('express');
const app = express();

// Importação das rotas
const rotas = require('../app/rotas/rotas');
rotas(app);

// Dizendo ao node que o app será exportado para ser utilizado em outros locais
module.exports = app;