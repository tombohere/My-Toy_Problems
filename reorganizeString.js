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
  console.log(S.length);
  var letters = {};
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
  console.log(JSON.stringify(letters));
  while (letters.length) {
    if (letters[0][0] !== current) {
      result += letters[0][0];
      current = letters[0][0];
      if (!--letters[0][1]) letters.shift();
    } else {
      if (letters[1] !== undefined) {
        result += letters[1][0];
        current = letters[1][0];
        if (!--letters[1][1]) letters.splice(1, 1);
      } else {
        // console.log(result.length);
        // return result;
        var prev = '';
        var found = false;
        for (var i = 0; i < result.length; i++) {
          prev = result[i-1] || '';

          if (letters[0][0] !== result[0] && letters[0][0] !== prev) {
            
            result = result.slice(i - 1, i) + letters[0][0] + result.slice(i);
            if (!--letters[0][1]) letters.shift();
            found = true;
          }
          
        }
        if (!found) {
          console.log(result, result.length);
          console.log(JSON.stringify(letters));
          return 'not found';
        }


      }
    }
  }
  // console.log(result.length);
  return result;
}


//  console.log(reorganizeString('aaab'));
// console.log(reorganizeString('aab'));
// console.log(reorganizeString('vvvlo'));
// console.log(reorganizeString('blflxll'));
// console.log(reorganizeString('ogccckcwmbmxtsbmozli'));
// console.log(reorganizeString('nlmxhnpifuaxinxpxlcttjnlggmkjioewbecnofqpvcikiazmn'));
console.log(reorganizeString('tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao'));
