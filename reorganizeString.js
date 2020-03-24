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
  // console.log(JSON.stringify(letters));
  // console.log(letters.length);
  var prev = '';
  while (result.length < S.length) {
    for (var i = 0; i < letters.length; i++) {
      if (letters[i][0] === prev) return '';
      prev = letters[i][0];
      result += letters[i][0];
      if (!--letters[i][1]) {
        letters = letters.slice(0, i).concat(letters.slice(i + 1));
      } else {
        if (letters[i + 1] !== undefined) {
          if (letters[i + 1][1] === 1 && letters[i][1] > 1) {
            i++;
            if (letters[i][0] === prev) return '';
            prev = letters[i][0];
            result += letters[i][0];
            if (!--letters[i][1]) {
              letters = letters.slice(0, i).concat(letters.slice(i + 1));
              break;
            }
          }
        }
      }
    }
  }
  return result;
}


// console.log(reorganizeString('aaab'));
// console.log(reorganizeString('aab'));
// console.log(reorganizeString('vvvlo'));
// console.log(reorganizeString('blflxll'));
// console.log(reorganizeString('ogccckcwmbmxtsbmozli'));
// console.log(reorganizeString('nlmxhnpifuaxinxpxlcttjnlggmkjioewbecnofqpvcikiazmn'));
// console.log(reorganizeString('tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao'));
console.log(reorganizeString('kkkkzrkatkwpkkkktrq'));