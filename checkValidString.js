/*
Valid Parenthesis String
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
4. '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
5. An empty string is also valid.

Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let map = {
    '(': 0,
    '*': 0
  };
  for (let c of s) {
    if (c === ')') {
      if (map['(']) {
        map['(']--;
      } else if (map['*']) {
        map['*']--;
      } else {
        return false;
      }
    } else {
      map[c]++;
    }
  }
  console.log(JSON.stringify(map));
  while (map['(']){
    if (map['*'] === 0) {
        return false;
    } else if (map['('] > map['*']) {
        return false;
    } else {
        map['*']--;
        map['(']--;
    }        
  }
  console.log(JSON.stringify(map));
  return true; 
};

var checkValidString = function(s) {
  var charMap = {
      '(': [],
      '*': []
  };
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ')') {
          if (charMap['('].length) {
           charMap['('].pop();
          } else if (charMap['*'].length) {
           charMap['*'].pop();
          } else {
              return false;
          }
      } else {
          charMap[s[i]].push(i);
      }
  }
  console.log(JSON.stringify(charMap));
  while (charMap['('].length){
      if (!charMap['*'].length) {
          return false;
      } else if (charMap['('][charMap['('].length -1] > charMap['*'][charMap['*'].length -1] ) {
          return false;
      } else {
          charMap['*'].pop();
          charMap['('].pop();
      }        
  }
  console.log(JSON.stringify(charMap));
  return true;
};

// console.log(checkValidString("(*"));            // true
// console.log(checkValidString("()"));            // true
// console.log(checkValidString("(*)"));           // true
// console.log(checkValidString("(*))"));          // true
// console.log(checkValidString(")("));            // false
// console.log(checkValidString("(*()"));          // true
// console.log(checkValidString("(((******)))"));  // true
// console.log(checkValidString("("));             // false
// console.log(checkValidString("*"));             // true
// console.log(checkValidString(")"));             // false
// console.log(checkValidString(""));              // true
console.log(checkValidString("(*(()))((())())*(**(()))((*)()(()))*(())()(())(()"));              // false
