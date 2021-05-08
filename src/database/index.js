const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Conecta sequelize ao banco de dados
const connection = new Sequelize(dbConfig);

//Importando model de usuário
const User = require('../models/User');

//Configurar para estar pronto para ser utilizado
User.init(connection);

//Exporta conexão caso precise em outro lugar
module.exports = connection;