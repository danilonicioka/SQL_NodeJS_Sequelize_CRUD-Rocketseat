//Importa o Model e os DataTypes de dentro do sequelize
const {Model, DataTypes} = require('sequelize');

//Criando classe que extende esse Model
class User extends Model{
    //Método padrão do sequelize que recebe a conexão com o banco de dados
    static init(sequelize){
        super.init({ //Pega método init do Model que passa os campos da tabela
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize //objeto de configuração para conexão com banco de dados que recebe como padrão o sequelize
        })
    }

    /* 
        Para fazer uma query dos endereços de um usuário, para pegar em uma rota por exemplo, deve-se fazer essa associação "correspondente" à de Adress-> an address "'belongsTo' an user" and "an user 'hasMany' addresses" 
    */
    static associate(models){
        this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'}); //a chave estrangeira é a mesma, e essa associação é referenciada como 'addresses', pois um usuário retornará (se tiver) vários endereços
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'}); //em relações N-N smp será belongsToMany
    }
}

module.exports = User;