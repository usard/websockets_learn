import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";

const httpServer = http.createServer().listen(3000);
const io = new Server(httpServer,{ // attaching socket to httpserver , should use this when using socket.io instead of plain websockets
    cors:{
        origin:'http://localhost:5500', // will allow only this domain of client to connect with server
    }
})


io.on('connection', (socket)=> { // socket refers to each user who connects to socketserver
    console.log('hi i am socketserver running on port 3000 on this machine');
    socket.on('message', (data)=> { // receving msg from client
        console.log('data :', data);
        socket.emit('message', data) // sending msg back to client
    })
});
