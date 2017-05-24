var fs = require('fs');
var path = require('path');
var files = [];

module.exports = function(file_path, ext, callback){
  fs.readdir(file_path, 'utf8' ,function(Err, data){
    if(Err) return callback(Err);
    for (var i = 0; i < data.length; i++) {
      if(path.extname(data[i]) === '.'+ext){
        files.push(data[i]);
      }
    }
    callback(null, files);
  });
};
