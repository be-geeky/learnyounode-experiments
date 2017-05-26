var net = require('net');
var date = new Date();
var year = date.getFullYear()+'';

var pad = "00";
var month = addPadding(date.getMonth() + 1 + '', pad);
var day = addPadding(date.getDate() + '', pad);

var hours = addPadding(date.getHours() + '', pad);
var minutes = addPadding(date.getMinutes() + '', pad);

var full_date = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;

var server = net.createServer(function (socket) {
     socket.write(full_date);
     socket.end('\n');
   })
server.listen(process.argv[2]);

function addPadding(date, pad){
  return pad.substring(0, pad.length - date.length) + date;
}
