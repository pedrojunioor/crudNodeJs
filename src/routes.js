const express = require('express');

const empresaController = require('../src/controllers/empresaController')
const setorController = require('../src/controllers/setorController')

const routes = express.Router();

routes.get('/',(req, res) => {
    res.send('Hello World');
});

//ROTAS EMPRESA
routes.get('/empresas', empresaController.buscarEmpresas);
routes.post('/cadastrar-empresa', empresaController.cadastrarEmpresa)
routes.delete('/empresa/:id', empresaController.deletarEmpresa);
routes.put('/empresa/:id', empresaController.alterarEmpresa)

//ROTAS SETOR
routes.get('/setores', setorController.buscarSetores);
routes.post('/cadastrar-setor', setorController.cadastrarSetor)
routes.delete('/setor/:id', setorController.deletarSetor);
routes.put('/setor/:id', setorController.alterarSetor)

module.exports = routes;