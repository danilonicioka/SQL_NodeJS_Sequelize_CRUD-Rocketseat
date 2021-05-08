//Como vai lidar com o controller de usuário, deve-se importar o model
const User = require('../models/User');

module.exports = {
    //Como toda operação com banco de dados é feita de forma assíncrona, os métodos devem ser "async" e as funções devem esperar "await" para finalizar
    async store(req, res){ //método para armazenar um usuário
        const { name, email } = req.body;

        const user = await User.create({name, email});

        return res.json(user); //retorna resposta em formato json com todos os dados do usuário criado
    },

    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    }
}