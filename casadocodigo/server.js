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

// const http = require('http');

// const porta = 3000;

// const servidor = http.createServer(function (req, resp) {

//     let html = '';
//     if (req.url == '/') {

//         html = `<html>
//         <head>
//             <meta charset="UTF-8">
//             <title>Homepageo</title>
//         </head>
//         <body>
//             <h1>Casa do código</h1>
//         </body>
//         </html>`
//     } else if (req.url == '/livros') {

//         html = `<html>
//             <head>
//                 <meta charset="UTF-8">
//                 <title>Casa do Código</title>
//             </head>
//             <body>
//                 <h1>Listagem de Livros</h1>
//             </body>
//             </html>`
//     }
//     resp.end(html);
// });
// servidor.listen(porta);
