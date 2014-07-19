// Questo serve per alcuni esercizi.
// lo vedremo meglio più avanti

var restify = require('restify');

var server = restify.createServer();
var port = 9999;

server.get('/hello/:name', function(req, res, cb) {
  var timeout = Math.round(Math.random() * 10000);
  var hash = Math.round(Math.random() * 10000);
  console.log('Richiesta: %s. Faremo aspettare il client %d ms.', hash, timeout);
  setTimeout(function() {
    console.log('Sto rispondendo alla richiesta %s!', hash);
    res.json({
      hi: req.params.name,
      timeWaited: timeout
    });
    cb();
  }, timeout);
});

server.listen(port, function() {
  console.log('Listening on port', port);
});