const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('Привіт, це мій перший веб-сервер на Node.js!')
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

