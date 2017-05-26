var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, response){
  var readStream = fs.createReadStream();
  readStream.setEncoding('UTF8');
  readStream.on('data', function(chunk){
    
  });
  response.write(process.argv[3]);
});
server.listen(process.argv[2]);
