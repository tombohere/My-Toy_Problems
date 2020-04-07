/*
  Group Anagrams
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var ana = {};
  for (var str of strs) {
    var t = str.split('').sort().join('');
    if (ana[t] === undefined) {
      ana[t] = [str];
    } else {
      ana[t].push(str);
    }
  }
  return Object.values(ana);
};

var groupAnagrams = function (strs) {
  var ana = {};
  var primes = [
    2, 3, 5, 7, 11, 13,
    17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61,
    67, 71, 73, 79, 83, 89,
    97, 101
  ];
  for (var str of strs) {
    var key = 1;
    for (var char of str) {
      key *= primes[char.charCodeAt(0) - 97];
    }
    if (ana[key] === undefined) {
      ana[key] = [str];
    } else {
      ana[key].push(str);
    }
  }
  return Object.values(ana);
};

console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])));