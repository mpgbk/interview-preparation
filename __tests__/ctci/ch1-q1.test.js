const isUnique = require('../../src/ctci/ch1-q1');

test('returns true if string contains all unique characters', () => {
  expect(isUnique('Live present moment')).toBe(false);
  expect(isUnique('Alive swum')).toBe(true);
});
