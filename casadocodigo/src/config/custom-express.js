require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// URL usada para ativar o middleware
app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.urlencoded())
// Midleware de override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // olhar em corpos POST urlencoded e excluí-lo
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;

// Exemplo de código middleware
// const express = require('express');
// const app = express();

// app.use('*', (req, res, next) => {

//    // código do middleware.
// });