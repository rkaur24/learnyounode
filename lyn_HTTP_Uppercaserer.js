
var http = require('http');

var map = require('through2-map');

var uppercase = map(function(chunk) {
  return chunk.toString().toUpperCase();
});

var server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(uppercase).pipe(response);
  }
});
server.listen(process.argv[2]);

// var map = require('through2-map')  
//      inStream.pipe(map(function (chunk) {  
//       return chunk.toString().split('').reverse().join('')  
//      })).pipe(outStream)  