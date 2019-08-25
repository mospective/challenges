
// const testModule = require('./index');
// const testModule2 = require('./index');
// const fs = require('fs');

// // function onRequest(request, response) {
// //     response.writeHead(200, {'Content-Type': 'text/html'});
// //     //render html
// //     fs.readFile('./data.html', null, function(error, data){
// //         if (error) {
// //             response.writeHead(404);
// //             response.write('File not found');
// //         } else {
// //             response.write(data);
// //         }
// //         response.end();
// //     });
// //     testModule.accessDataCapture();
// //     //response.end();
// // }


// // http.createServer(onRequest).listen(8000);

// http.createServer(function (req, res) {
//     var html = buildHtml(req);
  
//     res.writeHead(200, {
//       'Content-Type': 'text/html',
//       'Content-Length': html.length,
//       'Expires': new Date().toUTCString()
//     });
//     res.end(html);
//   }).listen(8000);

//   testModule.accessDataCapture();
//   function buildHtml(req) {
//     var header = '';
//     var body = '<p>' + testModule2.test + '</p>';
  
//     // concatenate header string
//     // concatenate body string
  
//     return '<!DOCTYPE html>'
//          + '<html><head>' + header + '</head><body>' + body + '</body></html>';
//   };