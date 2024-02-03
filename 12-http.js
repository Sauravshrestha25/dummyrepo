const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('here is our short history')
    } else {
        res.end(`<h1>Oops!</h1> 
        <a href = '/'>Back Home </a>`)
    }
})

server.listen(5000)

