/* Usando il modulo vrutils incluso filtra l'array.
Il modulo fornisce fra le tante, la funzione:

isDivisibleBy(item, number,callback).
dove callback ha la seguente struttura:
callback(err, isDivisible);

SCOPO: filtrare l'array dato, in modo che il risultante abbia al suo interno soli numeri divisibili per 3!
HINT: entrambe le funzioni sono asyncrone!!!

*/
var vrutils = require('./vrutils');
var async = require('async');

// esempio utilizzo 1
//vrutils.isDivisibleBy(4, 2, function(err, isDivisible) {
//  console.log(isDivisible);
//});

// esempio 2
//vrutils.getJson('pippo', function(err, json) {
//  console.error(err);
//  console.log(json);
//});

var array = [1,2,3,"e",5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var arr1 = [];
var arr2 = [];

async.each(array, function (data, callback){
    vrutils.isDivisibleBy(data, 3, function cb (err,isDivisible){
		if (err) {
    		console.error(err);
  		};
  		if (isDivisible == true){
  			arr1.push(data);
  		};
		callback();
	});
}, function (err){
	if (err) {
    	console.error(err);
 	} else {
    	console.log(arr1);
	}
});

async.map(array, function (data, callback){
	vrutils.getJson(data, function (err, json){
		if (err) {
    		console.error(err);
  		} else {
  			arr2.push(json);
  		};
		callback();
	});
}, function (err){
	if (err) {
    	console.error(err);
 	} else {
    	console.log(arr2);
	}
});