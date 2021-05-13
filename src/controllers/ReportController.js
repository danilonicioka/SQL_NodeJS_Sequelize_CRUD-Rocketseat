//Controller para fazer um "relatório"
const User = require('../models/User')

//Importando operadores do sequelize
const {Op} = require('sequelize');

module.exports = {
    async show(req,res){
        /*
            Encontrar todos os usuários que tem email que termina com @gmail.com
                Desses usuários, buscar todos que moram na rua "Enéas Pinheiro"
                    Desses usuários, buscar as tecnologias que começam com React
        */
       const users = await User.findAll({
           attributes: ['name', 'email'],
           where: {
               email: {
                   [Op.iLike]: '%@gmail.com%'//Coloca entre [] pra pegar o valor da variável Op.iLike
                   //O sinal de % indica que deve-se ignorar o que vem antes ou depois(no final) e buscar apenas o trecho escrito
               }
           },
           include: [ //Include para associações/relacionamentos
            //Usa colchete pq é mais de um relacionamento
               { association: 'addresses', where: {street: 'Enéas Pinheiro'} },
               { association: 'techs',
               required: false, 
               /*
               Se os requisitos até aqui forem cumpridos, os dados do usuário serão listados, mas se ele não tiver uma tecnologia que inicia com React, só aparecerá seus dados e não as tecnologias
               inner join: o campo deve existir para retorna o usuário
               left outer join: pode ter ou não o campo, só retorna o campo se tiver
               */
            where: {
                name: {
                    [Op.iLike]: 'React%'
                }
            } },
           ]
       })

       return res.json(users);
    }
}