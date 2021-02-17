const checkPermutation = require('../../src/ctci/ch1-q2');

test('it should return true when string one is permutation of other', () => {
  expect(checkPermutation('Hello', 'ello H')).toBe(false);
  expect(checkPermutation('swum', 's wum')).toBe(false);
  expect(checkPermutation('swum', '')).toBe(false);
  expect(checkPermutation('Mrutyunjaya', 'Jayanti')).toBe(false);
  expect(checkPermutation('Hello', 'Helll')).toBe(false);
  expect(checkPermutation('The sky is pink', 'si ysk pink ehT')).toBe(true);
  expect(checkPermutation('', '')).toBe(true);
  expect(checkPermutation('rates', 'sater')).toBe(true);
});
