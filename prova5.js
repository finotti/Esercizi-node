var fs = require('fs');
var path = require('path');

a = "." + process.argv[3];

function chiamaindietro (err,list){
   if (err) throw err;
   for (i=0; i<=list.length; i++){
	b=path.extname(list[i]);
	if (b == a){
	   console.log(list[i]);
	}
   }
}

fs.readdir(process.argv[2], chiamaindietro);
