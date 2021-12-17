const express = require('express');

const empresaController = require('../src/controllers/empresaController')

const routes = express.Router();

routes.get('/',(req, res) => {
    res.send('Hello World');
});

routes.get('/empresas', empresaController.buscarEmpresas);

routes.post('/cadastrar-empresa', empresaController.cadastrarEmpresa)

routes.delete('/empresa/:id', empresaController.deletarEmpresa);

routes.put('/empresa/:id', empresaController.alterarEmpresa)

module.exports = routes;