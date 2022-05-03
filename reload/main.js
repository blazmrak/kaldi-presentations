const chokidar = require('chokidar')
const {Server, OPEN} = require('ws')

let socket

const server = new Server({port: 3001})
console.log('Started socket server on port 3001')

server.on('connection', client => {
    console.log('Client connected')
    client.on('disconnect', () => socket = null)
    socket = client
})

chokidar.watch('.', {
    ignored: ['node_modules/*', '.idea/*'],
}).on('change', () => {
    if (socket?.readyState === OPEN)
        socket?.send('refresh')
    else
        console.error('FAILED TO SEND MESSAGE')
})
console.log('Listening for changes')
