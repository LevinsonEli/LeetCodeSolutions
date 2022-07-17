 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

 if (numRows === 1)
  return s;
    
 let newStr = '';
 // The distance between two characters in the first row
 let mainGap = (numRows - 2) * 2 + 2;
 
 for (let rowNumber = 0; rowNumber < numRows; rowNumber++) {
  // The distance to the previous character in the row
   let secondaryGap = (rowNumber - 1) * 2 + 2;
   for (let strInx = rowNumber; strInx < mainGap * Math.ceil(s.length / mainGap) + numRows; strInx += mainGap) {
    // For middle rows
    if (secondaryGap !== 0 && secondaryGap !== mainGap && strInx - secondaryGap > 0 && strInx - secondaryGap < s.length)
     newStr += s[strInx - secondaryGap];
    // For the first and the last rows
    if (strInx < s.length)
     newStr += s[strInx];
   }
 }

 return newStr;
};
