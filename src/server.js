const express = require('express');
const app = express();
const routes = require('./routes');

//Importa a conexão com o banco de dados
require('./database'); //não precisa pegar nenhuma informação, apenas conectar ao banco, então pode-se fazer apenas o require.
//Além disso, já irá procurar pelo index.js, então não precisa especificar o arquivo

app.use(express.json()); //para saber lidar com requisições que vem no formato de json
app.use(routes);
app.listen(3333)