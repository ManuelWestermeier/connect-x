import ws from 'ws';

const wss = new ws.Server({ port: process.env.PORT, noServer: true });

const clients = new Map();

wss.on('connection', (socket) => {
    socket.send('hello world');
})