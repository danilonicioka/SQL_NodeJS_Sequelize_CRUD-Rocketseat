//Migration para criar usuários
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('users', { 
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      //Estes dois campos são preenchidos automaticamente, mas devem ser criados:
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false, //Inicialmente será a mesma data de criação
      },
    });
  },
  /*Após definir essa migration, pode-se executá-la com o comando:
      npx sequelize-cli db:migrate
    Esse comando também criará a tabela SequelizeMeta, a qual é útil para o caso de haver vários devs no projeto, pois ela armazena as migrations que já rodaram naquela base de dados e, caso haja alguma migration criada por outro dev que ainda não foi executada, o sequelize detecta e executa

    O comando:
      npx sequelize-cli db:migrate:undo
    Desfaz a última migration

    Caso queira adicionar algum campo 
  */

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('users');
  }
};
