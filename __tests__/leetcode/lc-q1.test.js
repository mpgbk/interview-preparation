const twoSum = require('../../src/leetcode/lc-q1');

test('returns the indices of two numbers, whose sum is target', () => {
  expect(twoSum([1, 2, 3, 4, 5], 4)).toEqual([0, 2]);
  expect(twoSum([2, 4], 6)).toEqual([0, 1]);
  expect(twoSum([-1, 2, 3, -4, 5], -5)).toEqual([0, 3]);
  expect(twoSum([-1, 1], 0)).toEqual([0, 1]);
  expect(twoSum([0, 0], 0)).toEqual([0, 1]);
  expect(twoSum([0, 2], 0)).toEqual(undefined);
});
