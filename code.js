//code.js
const { promisify } = require('util');

async function matchesAsync(arr, key) {
  const sleep = promisify(setTimeout);

  async function countMatches() {
    let count = 0;
    for (let element of arr) {
      if (element === key) {
        count += 1;
      }
      await sleep(0);
    }
    return count;
  }

  return await countMatches();
}

module.exports = { matchesAsync };

