import ws from 'ws';

const wss = new ws.Server({ port: process.env.PORT });

wss.on('connection', (socket) => {
    socket.send('hello world');
})