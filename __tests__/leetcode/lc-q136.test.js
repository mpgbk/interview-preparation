const singleNumber = require('../../src/leetcode/lc-q136');

test('returns the number which is not repeated', () => {
  expect(singleNumber([1, 1, 2, 2, 3, 3, 4, 5, 5])).toBe(4);
  expect(singleNumber([1])).toBe(1);
  expect(singleNumber([0])).toBe(0);
  expect(singleNumber([-1, 1, 1, 2, 2])).toBe(-1);
});
