/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  let [xLen, yLen] = binaryMatrix.dimensions();
  let [x, y] = [0, yLen - 1];
  while (x < xLen && y >= 0) {
    binaryMatrix.get(x, y) ? y-- : x++;
  }
  return y < yLen - 1 ? ++y : -1;
};