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

const convert = function (s, numRows) {
  let charMap = [];
  for (let i = 0; i < numRows; i++) charMap.push([]);

  let rowPointer = 0;
  let movingDown = true;
  for (let i = 0; i < s.length; i++) {
    if (movingDown) {
      charMap[rowPointer].push(s[i]);
      rowPointer++;
      if (rowPointer >= numRows) {
        rowPointer--;
        movingDown = false;
      }
    } else {
      rowPointer--;
      if (rowPointer === 0) {
        charMap[rowPointer].push(s[i]);
        rowPointer++;
        movingDown = true;
      } else {
        for (let j = 0; j < numRows; j++) {
          if (j === rowPointer) {
            charMap[j].push(s[i]);
          } else {
            charMap[j].push(' ');
          }
        }
      }
    }
  }

  let finalString = '';
  charMap.forEach(arr => {
    arr.forEach(letter => {
      if (letter !== ' ') finalString += letter;
    });
  });

  return finalString;
};

console.log(convert("PAYPALISHIRING", 3));
