//Migration para criar tecnologias
/* 
  Haverá uma relação de N-N(muitos para muitos), pois haverá várias tecnologias em comum entre vários usuários
  Nesses casos N-N, o banco de dados gera uma tabela pivô, a qual terá as relações entre os dois lados
    Neste caso, uma tabela user-techs em que haverá a relação entre usuários e tecnologias
    Assim, a tabela techs armazenará apenas as tecnologias e não o user_id como em endereços
*/
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
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
    return await queryInterface.dropTable('techs');
  }
};
