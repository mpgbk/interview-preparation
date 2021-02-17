/**
 * @author Mrutyunjaya Pradhan
 * @param {String} s1
 * @param {String} s2
 * @returns {Boolean}
 * !Time complexity O(n)
 */
const checkPermutation = (s1, s2) => {
  let frequencyMap = {};

  if (s1.length !== s2.length) {
    return false;
  }

  for (let char of s1) {
    if (frequencyMap[char] !== undefined) {
      frequencyMap[char] += 1;
    } else {
      frequencyMap[char] = 1;
    }
  }

  for (let char of s2) {
    if (frequencyMap[char] === undefined || frequencyMap[char] <= 0) {
      return false;
    } else {
      frequencyMap[char] -= 1;
    }
  }

  return true;
};

module.exports = checkPermutation;
