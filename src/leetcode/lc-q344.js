/**
 * @author Mrutyunjaya Pradhan
 * @param {Array} s
 * @returns {Number}
 * !Time complexity O(n)
 */
const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

module.exports = reverseString;
