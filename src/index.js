const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipo de parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados parar identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Bancos de Dados
 *
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

 /**
 * Comunicação com o banco de dados
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 *
 */