var func = require('./module')
var file_path = process.argv[2];
var ext = process.argv[3];

callback = function(Err, files){
  if(Err)
    throw Err;
  console.log(files.join('\n'));
}

func(file_path, ext, callback);
