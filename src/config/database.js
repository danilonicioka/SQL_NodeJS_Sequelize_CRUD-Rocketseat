//Configurando a conexão com o banco de dados
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '',
    database: 'sqlnode',
    define: {
        timestamps: true, //define que toda tabela criada tb terá os campos "created_at" e "updated_at"
        underscored: true, //define que os nomes compostos das colunas serão separados por _
    },
};