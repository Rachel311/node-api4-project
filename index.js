require('dotenv').config();
const server = require('./api/server');
const express = require('express');

const { PORT } = require('./config');



server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})