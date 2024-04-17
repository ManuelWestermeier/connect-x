import ws from 'ws';
import serverless from 'serverless-http';

const wss = new ws.Server({ port: process.env.PORT, noServer: true });

const clients = new Map();

wss.on('connection', (socket) => {
    socket.send('hello world');
})

export const handler = serverless(wss);