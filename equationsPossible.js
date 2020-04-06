/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  var val = {};
  var count = 0;

  for (var eq of equations) {
    if (eq[1] === '=') {
      if (eq[0] === eq[3]) break;
      if (val[eq[0]] === undefined && val[eq[3]]) {
          val[eq[0]] = val[eq[3]];
      } 
      if (val[eq[0]] === undefined) {
        val[eq[0]] = ++count;
      }
      if (val[eq[3]] === undefined) {
          val[eq[3]] = val[eq[0]];
      }
      console.log(eq, val[eq[0]], val[eq[3]]);
      if (val[eq[0]] !== val[eq[3]]) return false;
    }
  }
  for (var eq of equations) {
    if (eq[1] === '!') {
      if (val[eq[0]] === undefined) {
        val[eq[0]] = ++count;
      }
      if (val[eq[3]] === undefined) {
          val[eq[3]] = ++count;
      }
     console.log(eq, val[eq[0]], val[eq[3]]);
      if (val[eq[0]] === val[eq[3]]) return false;
    }
  }
  return true;
};


// console.log(equationsPossible(["a==b","b!=a"]));  // false
// console.log(equationsPossible(["b==a","a==b"]));  // true
// console.log(equationsPossible(["a==b","b==c","a==c"]));  // true
// console.log(equationsPossible(["a==b","b!=c","c==a"]));  // false
// console.log(equationsPossible(["c==c","b==d","x!=z"]));  // true
// console.log(equationsPossible(["b==b","b==e","e==c","d!=e"]));  // true
// console.log(equationsPossible(["c==c","f!=a","f==b","b==c"]));  // true
// console.log(equationsPossible(["f==b","c==b","c==b","e!=f"]));  // true
// console.log(equationsPossible(["e==d","e==a","f!=d","b!=c","a==b"]));  // true
console.log(equationsPossible(["b!=f","c!=e","f==f","d==f","b==f","a==f"]));  // false