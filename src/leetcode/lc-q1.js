/**
 * @author Mrutyunjaya Pradhan
 * @param {Array} nums
 * @param {Number} target
 * @returns {boolean}
 * !Time complexity O(n)
 */
const twoSum = (nums, target) => {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) {
      return [numMap.get(target - nums[i]), i];
    }
    numMap.set(nums[i], i);
  }
};

module.exports = twoSum;
