const expres = require('express');

const http = require('http');

const porta = 3000;

const servidor = http.createServer(function (req, resp) {

    let html = '';
    if (req.url == '/') {

        html = `<html>
        <head>
            <meta charset="UTF-8">
            <title>Homepageo</title>
        </head>
        <body>
            <h1>Casa do código</h1>
        </body>
        </html>`
    } else if (req.url == '/livros') {

        html = `<html>
            <head>
                <meta charset="UTF-8">
                <title>Casa do Código</title>
            </head>
            <body>
                <h1>Listagem de Livros</h1>
            </body>
            </html>`
    }
    resp.end(html);
});
servidor.listen(porta);
