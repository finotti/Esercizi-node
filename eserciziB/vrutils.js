var request = require('superagent');
var url = 'http://localhost:9999/hello/';

var Vrutils = function() {};

Vrutils.prototype.isDivisibleBy = function(item, by, cb) {
  process.nextTick(function() {
    if (typeof by !== 'number') {
      return cb(new Error('Number is not a number!'));
    }
    cb(null, (item % by) == 0);
  });
};

Vrutils.prototype.getJson = function(name, cb) {
  request.get(url + name).end(function(res) {
    if (res.ok) {
      console.log('Perfect!');
      cb(null, res.body);
    } else {
      console.error('Ostia!');
      cb(new Error('Ostia!'));
    }
  });
};

module.exports = new Vrutils();
