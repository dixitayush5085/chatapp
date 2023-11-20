const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    socket.on('send_message', (data) => {
        console.log("Received message:", data);
        io.emit('message_received', data);
    });
});


server.listen(3001, () => {
    console.log("Server is running");
});
