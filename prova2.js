var a=0;
var b=process.argv.length;

for (i=2; i<=b-1; i++){
	a += +process.argv[i];
}

console.log(a);
