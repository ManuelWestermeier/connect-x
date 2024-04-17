import ws from 'ws';
import serverless from 'serverless-websocket';

const wss = new ws.WebSocketServer({ noServer: true });

const clients = new Map();

wss.on('connection', (socket) => {
    socket.send('hello world');
})

export const handler = serverless(wss);
