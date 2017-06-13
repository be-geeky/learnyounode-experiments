var http = require('http')
var url = require('url')

function parsetime(request_url){
  date = new Date(request_url.query.iso);
  var formatted_date = {"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()};//prints expected format.
  return formatted_date;
}

function unixtime(request_url){
  date = new Date(request_url.query.iso);
  var myDate = {"unixtime": +new Date(request_url.query.iso)};
  return myDate;
}
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  // assign request.url to variable url
  request_url = url.parse(request.url, true);
  if(request_url.pathname == '/api/parsetime'){
    response.write(JSON.stringify(parsetime(request_url)));
    response.end();
  }else if (request_url.pathname == '/api/unixtime') {
    //unixtime(request_url);
    response.write(JSON.stringify(unixtime(request_url)));
    response.end();
  }
}).listen(+process.argv[2]);
