import http from 'node:http';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        return res.end('Home');
    }
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Not Found');
});

server.listen(3000, () => {
    console.log('server is running on port 3000')
})