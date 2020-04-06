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
var groupAnagrams = function(strs) {
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

console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])));