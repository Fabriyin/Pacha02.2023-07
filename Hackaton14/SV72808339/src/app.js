import express from "express";
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
})

io.on('connection', (socket) => {
    console.log('client is connected.')

    socket.on('disconnect', () => {
        console.log('client is disconnected.')
    })

    socket.on('chat message', (msg)=> {
        io.emit('chat message', msg)
    })
})

app.use('/', (req, res) => {
    // res.send('running')
    res.sendFile(process.cwd() + '/public/index.html')
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
