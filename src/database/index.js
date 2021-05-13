const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Conecta sequelize ao banco de dados
const connection = new Sequelize(dbConfig);

//Importando models-
    //P/ projetos maiores, há módulos para fazer de forma automática, como o consign(loading de script automático) e o require-directory
const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech')

//Configurar para estar pronto para ser utilizado
User.init(connection);
Address.init(connection);
Tech.init(connection);

Address.associate(connection.models); //passa todos os models como parâmetro para usar as associações de Address
User.associate(connection.models);
Tech.associate(connection.models);

//Exporta conexão caso precise em outro lugar
module.exports = connection;