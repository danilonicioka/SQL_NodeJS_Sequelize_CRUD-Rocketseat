const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

//Rota para cadastro de usuários
routes.post('/users', UserController.store);

//Rota para listar usuários
routes.get('/users', UserController.index);

module.exports = routes;