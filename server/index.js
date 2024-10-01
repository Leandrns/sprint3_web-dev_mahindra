const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})
const PORT = 3001

io.on('connection', socket => {
    socket.on('message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: 'user'
        })
    })
})

server.listen(PORT, () => console.log('Rodando servidor...'))