const {Model, DataTypes} = require('sequelize');

class Address extends Model{
    static init(sequelize){
        super.init({ 
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models){ //Configurar relacionamento entre adresses e users
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'}) //Os endereços pertencem ao model User e são configurados por meio da chave estrangeira user_id e referenciam como 'user'(user do endereço)
    }
}

module.exports = Address;