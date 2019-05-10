const { check, validationResult } = require('express-validator/check');
const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const BaseControlador = require('../controlador/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {

    const rotasBase = BaseControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());

};