// code.test.js
//using testing values for JamesOzzyBurn

const fs = require('fs');
const assert = require('assert');
const { matchesAsync } = require('./code.js'); 

async function runTests() {
  let array = [1, 2, 3, 4, 5];
  assert.strictEqual(await matchesAsync(array, 0), 0);

  array = [1, 1, 3, 1, 1, 3, 1, 1, 3];
  assert.strictEqual(await matchesAsync(array, 1), 6);

  array = ["dog", "cat", "dog", "mouse"];
  assert.strictEqual(await matchesAsync(array, "dog"), 2);

  array = ["dog", "cat", "dog", "mouse"];
  assert.strictEqual(await matchesAsync(array, "bear"), 0);

  array = ["dog", "cat", "dog", "mouse", 1, 1, 3, 1, 1, 3, 1, 1, 3];
  assert.strictEqual(await matchesAsync(array, 3), 3);
}

runTests().catch(err => console.error(err));









