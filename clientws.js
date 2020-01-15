const WebSocket = require('ws');

const connection = new WebSocket('ws://127.0.0.1:666');

connection.onopen = () => {
  var message = JSON.stringify({
    type: 'message',
    content: 'Ping'
  });
  connection.send(message);
  connection.close();
}

connection.on('message', (data) => {
  console.log('CLIENT : ', data)
});