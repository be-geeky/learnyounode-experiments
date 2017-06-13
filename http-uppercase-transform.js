var http = require('http');
var stream = require('stream');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method != 'POST') {
    console.log('You have failed to comply with our stringent demands');
    return false
   }
   var uppercase = new stream.Transform();
     uppercase._transform = function (data, enc, cb) {
       cb(null, data.toString().toUpperCase());
     };
     req.pipe(uppercase).pipe(res);
})

server.listen(port)
