/*
  Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Infinity;
    var sum = 0;
    for (var i of nums) {
      sum = Math.max(i, sum + i);
      max = Math.max(max, sum);
    }
    return max;
};

console.log(maxSubArray([-2, 1 -3, 4, -1 ,2 ,1, -5, 4]));   // 6
console.log(maxSubArray([1, 2]));   // 3
console.log(maxSubArray([-1]));   // -1