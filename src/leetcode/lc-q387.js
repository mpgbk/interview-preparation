/**
 * @author Mrutyunjaya Pradhan
 * @param {String} s
 * @returns {Number}
 * !Time complexity O(n)
 */
const firstUniqChar = (s) => {
  let strMap = new Map();

  for (let i of s) {
    if (strMap.has(i)) {
      strMap.set(i, strMap.get(i) + 1);
    } else {
      strMap.set(i, 1);
    }
  }

  for (let i of strMap.keys()) {
    if (strMap.get(i) === 1) {
      return s.indexOf(i);
    }
  }

  return -1;
};

module.exports = firstUniqChar;
