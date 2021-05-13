//Não é preciso criar um model para o relacionamento user_tech, pois só armazenará id's, então o sequelize consegue lidar com ela

const {Model, DataTypes} = require('sequelize');

class Tech extends Model{
    static init(sequelize){
        super.init({ 
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs' //indicar que o nome da tabela é techs
        })
    }

    static associate(models){
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users'}); //o through indica qual a tabela pivô que guardará as associações
        //nome da relação será 'users', pois serão os usuários que possuem aquela tecnologia
    }
}

module.exports = Tech;