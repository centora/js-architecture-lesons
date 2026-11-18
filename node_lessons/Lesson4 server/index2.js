import http from 'node:http';

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('X-Powered-By', 'Node.js');
    res.end(JSON.stringify({
        message: 'Привіт',
        time: 'now'
    }))
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')    
})