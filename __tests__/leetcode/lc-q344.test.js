const reverseString = require('../../src/leetcode/lc-q344');

test('reverses the string', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h',
  ]);
  expect(reverseString(['H', 'o', 'u', 'd', 'Y'])).toEqual([
    'Y',
    'd',
    'u',
    'o',
    'H',
  ]);
  expect(reverseString([1, 2, 3])).toEqual([3, 2, 1]);
});
