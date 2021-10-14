// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//   P.S.Each array includes only integer numbers.Output is a number too.


function arrayPlusArray(arr1, arr2) {
  sumOfArr1 = arr1.reduce((sum, el) => sum + el, 0);
  sumOfArr2 = arr2.reduce((sum, el) => sum + el, 0);

  return sumOfArr1 + sumOfArr2;
}

// Test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
//   })
// })