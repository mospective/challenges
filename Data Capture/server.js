const http = require('http');
const testModule = require('./index');
const fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    //render html
    fs.readFile('./data.html', null, function(error, data){
        if (error) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end();
    });
    testModule.accessDataCapture();
    //response.end();
}


http.createServer(onRequest).listen(8000);