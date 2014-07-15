var expect = require('chai').expect;

Array.prototype.capitalyze = function() {
  
  return this;
};

var arr = 'ciao come va'.split(' ');

expect(arr.capitalyze().join(' ')).to.equal('Ciao Come Va');
