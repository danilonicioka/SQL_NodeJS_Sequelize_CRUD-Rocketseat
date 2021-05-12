'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: { //qual o usuário "dono" desse endereço
        /* 
          um usuário pode ter vários endereços, mas um endereço pertence a apenas um usuário
          uma relação de 1-N(um para muitos)
        */
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'}, //referencia a tabela users e o campo id->chave estrangeira
        onUpdate: 'CASCADE', //sempre que houver alteração na referência(no id do usuário), o user_id acompanhará a mudança
        onDelete: 'CASCADE', //assim que o usuário for deletado, deleta este endereço tb
      },
      zipcode: { //CEP
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('addresses');
  }
};
