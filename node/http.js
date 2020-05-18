const http = require('http')

const server = http.createServer((Requst, Response) => {

    console.log(Requst.url)
    Response.end(' < h2 > Hello Node.js < /h2>')


})

server.listen(1234, () => {

    console.log('server is running and port is 1234')
})