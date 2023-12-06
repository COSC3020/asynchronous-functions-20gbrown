// code.test.js
//using testing code from JamesOzzyburn for now until code is working
var async = require("async");
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

array = [1,2,3,4,5]
console.log(matchesAsync(array,0));
assert(matchesAsync(array, 0) === 0);

array = [1,1,3,1,1,3,1,1,3]
assert(matchesAsync(array, 1) === 6);

array = ["dog", "cat", "dog", "mouse"]
assert(matchesAsync(array, "dog") === 2);

array = ["dog", "cat", "dog", "mouse"]
assert(matchesAsync(array, "bear") === 0);

array = ["dog", "cat", "dog", "mouse", 1,1,3,1,1,3,1,1,3]
assert(matchesAsync(array, "3") === 3);








