const LivroControlador = require('./livro-controlador');

const templates = require('../views/templates');

class BaseControlador {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        };
    }

    home() {
        return function (req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }
    login() {

        return function (req, resp) {
            resp.marko(templates.base.login);
        };
    }

    efetuaLogin() {

        return function (req, resp, next) {

            // Lógica de login, se não cair nos ifs, deu certo

            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                if (info) {
                    return resp.marko(templates.base.login);
                }

                if (erro) {
                    return next(erro);
                }

                req.login(usuario, () => {
                    if (erro) {
                        return next(erro);
                    }
                    return resp.redirect(LivroControlador.rotas().lista);
                });
            })(req, resp, next);
        };
    }
}

module.exports = BaseControlador;