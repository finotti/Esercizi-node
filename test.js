var len = 0;

setTimeout(function() {
  len = 10;
}, 120);

setTimeout(function() {
  len = 20;
}, 50);

console.log("1 " + len);

setTimeout(function() {
  console.log("2 " + len);
}, 0);

console.log("3 " + len);

setTimeout(function() {
  len = 30;
  console.log("4 " + len);
}, 100);
