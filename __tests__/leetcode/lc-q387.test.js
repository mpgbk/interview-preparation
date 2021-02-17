const firstUniqChar = require('../../src/leetcode/lc-q387');

test('returns the index of first unique character in the string', () => {
  expect(firstUniqChar('loveleetcode')).toBe(2);
  expect(firstUniqChar('1111112222223')).toBe(12);
  expect(firstUniqChar('llllllllooooooo')).toBe(-1);
  expect(firstUniqChar('leetcode')).toBe(0);
  expect(firstUniqChar('l')).toBe(0);
});
