/*
Search in Rotated Sorted Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

4 5 6 7 0 1 2   1. check if 6 is target
      ^         2. is 6 < 0 and target > 4
                    then find mid right
                3. otherwise find mid left

4 5 6 7 0 1 2   target found
        ^

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

4 5 6 7 0 1 2
      ^

4 5 6 7 0 1 2
          ^

4 5 6 7 0 1 2  not found
            ^
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(((right) - left) / 2) + left;
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));  // 4
console.log(search([4,5,6,7,0,1,2], 3));  // -1
console.log(search([3,1], 3));  // 0
console.log(search([5,1,3], 5));  // 0
console.log(search([1,3,5], 5));  // 2
