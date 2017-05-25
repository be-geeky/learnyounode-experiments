var http = require('http');

var str = '';
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    str = str + data;
  });
  response.on('end',function(){
    console.log(str.length);
    console.log(str);
  });
  response.on('error',function(error){
    console.log(error);
  });
});
