const app = require('../src/config/custom-express');

// Função que ouve a porta 3000
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});
