const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

const port = 5000;

server.listen(5000, () => {
    console.log('Server listening on port : 5000')
})