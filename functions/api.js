/*
import ws from 'ws';

const wss = new ws.Server({ port: 3000 });

wss.on('connection', (socket) => {
    socket.send('hello world');
})
*/

export const handler = (req, res) => {
  res.end("hello world");
}