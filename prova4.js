var fs = require('fs');
var a = 0;

function callback (err,data){
   if (err) throw err;
   a=data.toString().split("\n").length;
   console.log(a-1);
}

fs.readFile(process.argv[2], encoding=String, callback);
