// 19:44 mon may16 wk20 2022
// My first attempt at creating a server.

// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(`client has made a request.`)
//     res.end(`You're welcomed to my home page.`)
// })

// server.listen(4433)



const {createServer} = require('http')

const server = createServer((req, res) => {
    console.log(`An http request from client has been received.`)
    res.end(`You're warmly, warmly welcomed to my home page!`)
})

server.listen(4433)