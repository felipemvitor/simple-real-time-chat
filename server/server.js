const http = require('http')
const socketIo = require('socket.io')

const PORT = 3000

var server = http.createServer((req, res) => {
    console.log(" Server is running on port " + PORT)
}).listen(PORT)

var webSocket = socketIo.listen(server)
var users = []

webSocket.sockets.on('connection', (socket) => {

    socket.on('login', (user) => {
        console.log('User logged: ' + user.name)
        users.push(user)
        socket.emit('login', users)
        socket.broadcast.emit('login', users)
    })

})