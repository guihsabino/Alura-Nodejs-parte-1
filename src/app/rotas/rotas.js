// Função exportada capaz de receber o app de custom
module.exports = (app) => {

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
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
};

