
const express = require('express');

const port = 3000;
const server = express();

server.get("/", (req, res) => {
    res.send('Привіт, це мій перший веб-сервер на Node.js');
});

server.listen(port);

