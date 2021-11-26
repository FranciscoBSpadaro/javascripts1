var foo = ["1", "2", "3"];

var [x, y, z,] = foo;
console.log(x); // "one"
console.log(y); // "two"
console.log(z); // "three"


var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"

// ...rest
var [a, ...b] = ["xa", "v2", "x3", "d4", "a5", "x6"];
console.log(a); 
console.log(b); 
console.log([b].map(x => x.length+1));