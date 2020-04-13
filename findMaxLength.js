/*
Contiguous Array
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let result = 0;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] ? 1 : -1;
    for( let j = i + 1; j < nums.length; j++) {
      sum += nums[j] ? 1 : -1;
      if (sum === 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};

var findMaxLength = function(nums) {
  const map = new Map();
  let runningDiff = 0;
  let max = 0;
  nums.forEach((num, i) => {
    num ? runningDiff++ : runningDiff--;
    if (!runningDiff) {
      max = i + 1;
    } else if (map.has(runningDiff)) {
      max = Math.max(max, i - map.get(runningDiff));
    } else {
      map.set(runningDiff, i);
    }
  });
  return max;
};

console.log(findMaxLength([0,1])); // 2
console.log(findMaxLength([0,1,0])); // 2
console.log(findMaxLength([0,0,0,1,1,1,0])); // 6
console.log(findMaxLength([0,1,1,0,1,1,1,0])); // 4
