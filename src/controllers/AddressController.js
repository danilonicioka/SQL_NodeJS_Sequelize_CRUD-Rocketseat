const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
    async index(req,res){
        const {user_id} = req.params;
        const user = await User.findByPk(user_id, {
            include: {association: 'addresses'}
            /* 
                O método findByPk possui como segundo parâmetro um objeto que pode ser usado para buscar as associações do (nesse caso) usuário que encontrou    
            */
        });
        return res.json(user); //Caso queira retornar apenas os endereços, pode-se usar "user.addresses"
    },

    async store(req, res){
        const {user_id} = req.params;
        const {zipcode, street, number} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){ //Verifica se o usuário referenciado existe
            return res.status(400).json({error: 'User not found'});
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id
        });

        return res.json(address);
    }
}