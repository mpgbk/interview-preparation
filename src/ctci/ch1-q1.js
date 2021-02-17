/**
 * @author Mrutyunjaya Pradhan
 * @param {String} str
 * @returns {Boolean}
 * !Time complexity O(n)
 */
const isUnique = (str) => {
  let strMap = {};
  for (let char of str) {
    if (strMap[char] === undefined) {
      strMap[char] = 1;
    } else {
      return false;
    }
  }
  return true;
};

module.exports = isUnique;
