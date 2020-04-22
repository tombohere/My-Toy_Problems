/*
Subarray Sum Equals K
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
   Hint #1  
Will Brute force work here? Try to optimize it.
   Hint #2  
Can we optimize it by using some extra space?
   Hint #3  
What about storing sum frequencies in a hash table? Will it be useful?
   Hint #4  
sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1. Can we use this property to optimize it.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let result = 0;
  let hash = { 0: 1 };
  let sum = 0;
  for (let num of nums) {
    sum += num;
    result += hash[sum - k] || 0;
    hash[sum] = (hash[sum] || 0) + 1;
    // console.log(JSON.stringify(hash[sum - k]), hash);
  }
  
  return result;
};

console.log(subarraySum([1,1,1,2], 2)); // 2