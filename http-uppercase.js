const http = require('http');
var results = [];
var server = http.createServer(function(request,response){
  if (request.method === 'POST') {
    request.on('data', function(chunk){
      response.write(chunk.toString().toUpperCase());
    });
    request.on('end', function(){
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
});
server.listen(process.argv[2]);
