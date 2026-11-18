import http from "node:http";


const server = http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers['user-agent'])
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(`<h1>Ви запитали ${req.url}</h1>`);
});

server.listen(3000, () => {
    console.log('Server is now already again running at http://localhost:3000')
})