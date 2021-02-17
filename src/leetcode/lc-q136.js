/**
 * @author Mrutyunjaya Pradhan
 * @param {Array} nums
 * @returns {Number}
 * !Time complexity O(n)
 */
const singleNumber = (nums) => {
  let sNum = 0;
  for (let i of nums) {
    sNum ^= i;
  }
  return sNum;
};

module.exports = singleNumber;
