// You get an array of numbers, return the sum of all of the positives ones.

//   Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum
}

// Test

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
//     assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
//     assert.strictEqual(positiveSum([]), 0);
//     assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
//     assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
//   });
// });