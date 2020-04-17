/*
Product of Array Except Self
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
  let amt = 1;
  for (let num of nums) {
    result.push(amt);
    amt *= num;
  }
  console.log(result);
  amt = 1;
  for(let i = nums.length - 1; i >= 0; i--) {
    result[i] *= amt;
    amt *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1,2,3,4]));