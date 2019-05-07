const http = require('http');

const porta = 3000;

const servidor = http.createServer(function (req, resp) {
    resp.end(`<html>
    <head>
        <meta charset="UTF-8">
        <title>Casa do Código</title>
    </head>
    <body>
        <h1>Casa do código</h1>
    </body>
    </html>`);
});
servidor.listen(porta);
