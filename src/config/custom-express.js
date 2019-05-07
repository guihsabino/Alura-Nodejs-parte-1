// Função express para criar abstrações de rotas
const express = require('express');
const app = express();

// Dizendo ao node que o app será exportado para ser utilizado em outros locais
module.exports = app;