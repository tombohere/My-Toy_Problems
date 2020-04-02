function solution(A) {
  let result = 0;

  for (let element of A) {
      // Apply Bitwise XOR to the current and next element
      result ^= element;
  }

  return result
}
console.log(solution([2,1,1,3,3,4,5,4,5]));


// console.log(122 >> 31);
// console.log(-122 >> 31);