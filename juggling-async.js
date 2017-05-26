var http = require('http');
var bl = require('bl');
var output = [];
var cnt = 0;

function getResult(i){
  http.get(process.argv[i + 2], function(response){
    response.pipe(bl(function(err,data){
      output[i] = data.toString();
      cnt++;
      if(cnt === 3){
        printResults(output);
      }
    }));
  })
}
function printResults(output){
  for (var i = 0; i < 3; i++) {
    console.log(output[i]);
  }
}
for (var i = 0; i < 3; i++) {
  getResult(i);
}
