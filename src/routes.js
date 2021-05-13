const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

//Rota para cadastro de usuários
routes.post('/users', UserController.store);

//Rota para listar usuários
routes.get('/users', UserController.index);

routes.get('/users/:user_id/addresses', AddressController.index); 
routes.post('/users/:user_id/addresses', AddressController.store); //Encadeamento de rotas para passar logo o id do usuário e relacionar com o endereço

//Pode-se criar rotas apenas para criar techs, mas, neste caso, só serão criadas ao associar a um usuário
routes.get('/users/:user_id/techs', TechController.index); 
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;