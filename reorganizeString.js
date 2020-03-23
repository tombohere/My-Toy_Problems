/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].
*/

var reorganizeString = function(S) {
  var letters = {};
  var temp;
  var current = '';
  var result = '';
  for (i of S) {
    if (letters[i]) {
      letters[i]++;
    } else {
      letters[i] = 1;
    }
  }
  letters = Object.entries(letters);
  letters.sort((a, b) => b[1] - a[1]);
  letters = letters.map((s) => s[0].repeat(s[1])).join('').split('');
  console.log(letters.join(''));
  while (letters.length > 1) {
    temp = letters.shift();
    // if (temp === current) return '';
    result += temp;
    current = temp;
    if (letters.length > 1) {
      temp = letters.pop();
      // if (temp === current) return '';
      result += temp;
      current = temp;
    }
  }
  console.log(result);
  console.log(letters);
  if (letters[0] === result[0] && letters[0] === result[result.length - 1]) {
    // for (var i = 0; i < result.length; i++)
    return '';
  }
  if (letters[0] === result[0]) return result + letters[0];
  return letters[0] + result;
}


// console.log(reorganizeString('aaab'));
// console.log(reorganizeString('aab'));
// console.log(reorganizeString('vvvlo'));
// console.log(reorganizeString('blflxll'));
// console.log(reorganizeString('ogccckcwmbmxtsbmozli'));
console.log(reorganizeString('nlmxhnpifuaxinxpxlcttjnlggmkjioewbecnofqpvcikiazmn'));