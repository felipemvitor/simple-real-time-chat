const http = require('http')
const socketIo = require('socket.io')

const PORT = 3000

var server = http.createServer((req, res) => {
    console.log(" Server is running on port " + PORT)
}).listen(PORT)

var webSocket = socketIo.listen(server)

webSocket.sockets.on('connection', (socket) => {

    socket.on('login', (user) => {
        console.log('User logged: ' + user.name)
        socket.emit('login', user)
    })

})