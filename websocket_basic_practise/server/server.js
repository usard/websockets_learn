const ws = require('ws');
const server = new ws.Server({port:'3000'});

server.on('connection', (socket)=> {
    console.log('hi i am server running on port 3000 on this machine');
    socket.on('message', (data)=> { // receving msg from client
        const debuffer = Buffer.from(data).toString();
        console.log('data :', debuffer);
        socket.send(debuffer) // sending msg back to client
    })
});
