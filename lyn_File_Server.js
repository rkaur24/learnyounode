
var fs = require('fs');
var http = require('http');

var filename = process.argv[3];

 var server = http.createServer(function(request, response) 
 {
  fs.createReadStream(filename).pipe(response);
});
server.listen(process.argv[2]);