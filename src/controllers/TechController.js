const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req,res){
        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                attributes: ['name'], //indica que é pra retornar da tabela tech apenas o nome
                through: { //representa tabela pivô
                    attributes: ['user_id'] 
                    /*
                    indica que é pra retornar da tebela pivô apenas o user_id
                    para não aparecer nada da tabela pivô, basta passar [] vazio para attributes
                    */
                }
            }
        })

        return res.json(user.techs);
    },

    async store(req, res){
        const {user_id} = req.params;
        const {name} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){ //Verifica se o usuário referenciado existe
            return res.status(400).json({error: 'User not found'});
        }

        const [ tech ]  = await Tech.findOrCreate({ //tenta procurar, mas, se n achar, cria e retorna a tecnologia-> o [] desestrutura esse retorno e pega os campos separadamente
            where: {name} //busca pelo nome
        }); 

        await user.addTech(tech);
        /*
            O sequelize possui vários comandos quando é criada uma associação N-N para facilitar a manipulação
            O addTech adiciona ao usuário definido pelo id a tecnologia criada ou encontrada
        */
       return res.json(tech);
    },

    async delete(req,res){ //Essa rota deleta apenas o relacionamento entre um usuário e uma tecnologia, não exclui a tecnologia em si da tabela
        const {user_id} = req.params;
        const {name} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found'});
        }

        const tech = await Tech.findOne({ //Tira os [] pq não retorna mais de uma informação
            where: {name}
        });

        await user.removeTech(tech);

        return res.json(); //não retorna nada pq só excluiu a relação, mas é bom retornar para encerrar a operação
    }
}