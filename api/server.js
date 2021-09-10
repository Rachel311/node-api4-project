const express = require('express');

const cors = require('cors');
const users = require('./users/users')

const server = express();
server.use(express.json());
server.use(cors());
server.use(users);


server.get('/', (req, res) => {
    res.send(`
    <h1>My App is Working!</h1>
    `)
});


server.use('*', (req, res) => {
    res.json({
        message: 'My app is awesome!'
    })
});

module.exports = server;