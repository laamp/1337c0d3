/*
  Example 1:

  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"

  P   A   H   N
  A P L S I I G
  Y   I   R

  Example 2:

  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:

  P     I    N
  A   L S  I G
  Y A   H R
  P     I
*/

var convert = function (s, numRows) {
  let sArr = s.split("");
  let numCols = Math.ceil(sArr.length / 2.0);
  let arr = [];

  let newCol = [];
  while (sArr.length > 0) {
    let currChar = sArr.shift();

    if (newCol.length < numRows) {
      newCol.push(currChar);
    } else {
      arr.push(newCol);
      newCol = new Array([]);
      newCol.push(currChar);
    }
  }

  return arr;
};

console.log(convert("PAYPALISHIRING"));
