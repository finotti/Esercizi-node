var fs = require('fs');
var file = String(process.argv[2]);

var str = fs.readFileSync(file).toString().split("\n");


console.log(str.length-1);
