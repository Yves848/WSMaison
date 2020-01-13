const net = require('net');

const client = net.createConnection({port:666}, () => {
    console.log('CLIENT: I connected to the server.');
    client.write(JSON.stringify({message:'init', content:'Tu mets ce que tu veux ....'}));
});

client.on('data', (data) => {
    console.log('CLIENT DATA :',data.toString());
    client.end();
});

client.on('end', () => {
    console.log('CLIENT: I dosconnected from the server.');
});