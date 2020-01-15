const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 666
});

wss.on('connection', ws => {
  ws.on('message', message => {
    var sMessage = JSON.parse(message);
    if (sMessage.type === 'message') {
      console.log(`Received message => ${sMessage.content}`);
      ws.send(`RECEIVED => ${sMessage.content}`);
    }
    else {
      console.error(`Did not understand => ${message}`);
    }
    
  });
  ws.send('SERVEUR LISTENING');
  
})