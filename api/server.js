const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const { logger } = require('./middleware/middleware');
const users = require('./users/users');

const server = express();
server.use(express.json());
server.use(cors());
server.use('/api', users);
server.use(logger);
server.use(morgan('dev'))


server.get('/', (req, res) => {
    res.send(`
    <h1>My App is Working!</h1>
    `)
});



module.exports = server;