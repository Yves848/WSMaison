const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        //console.log('DATA : ', data.toString());
        var jData = JSON.parse(data.toString());
        if (jData.message==='init') {
           console.log(jData.content); 
           
           
        } else {
            console.log('Gnéééééé');
        }
    })
    socket.write('SERVER: Hello! This is Server Speaking.\n');
    socket.end('SERVER: Closing connection now. \n');
    
}).on('error', (err) => {
    console.error(err);
});

server.listen(666,() => {
    console.log('opened server on', server.address().port);
})

