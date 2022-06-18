/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let strMap = new Map();
  let result = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (strMap.has(s[i])) {
      left = Math.max(left, strMap.get(s[i]) + 1);
    }
    result = Math.max(result, i - left + 1);
    strMap.set(s[i], i);
  }

  return result;
};
