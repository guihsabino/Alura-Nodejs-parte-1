// Função express para criar abstrações de rotas
const express = require('express');
const app = express();

// Função que ouve a porta 3000
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

// Representa que atende a rota raiz, e o corpo indica a resposta que vai pro usuário
app.get('/', function (req, resp) {
    resp.send(`<html>
            <head>
                <meta charset="UTF-8">
                <title>Homepageo</title>
            </head>
            <body>
                <h1>Casa do código</h1>
            </body>
            </html>`);
});
app.get('/livros', function (req, resp) {
    resp.send(`<html>
            <head>
                <meta charset="UTF-8">
                <title>Homepageo</title>
            </head>
            <body>
                <h1>Listagem de Livros</h1>
            </body>
            </html>`);
});

