var expect = require('chai').expect;

// Fn è la funzione di mapping che dovrà convertire i numeri in stringhe 'pari' o 'dispari'.

var arr = [1, 2, 3, 4];
var fn = function(nr) {
	if (nr%2 != 0) {nr="dispari";} else {nr="pari"};
	return nr;
};

var result = arr.map(fn);

// Do not edit lines after this one

expect(result[0]).to.equal('dispari');
expect(result[1]).to.equal('pari');
expect(result[2]).to.equal('dispari');
expect(result[3]).to.equal('pari');
