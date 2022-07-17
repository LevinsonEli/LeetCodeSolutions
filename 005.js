/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStart = s.length - 1;
  let maxEnd = 0;

  for (let i = 1; i < s.length; i++) {
    let start = i - 1;
    let end = i + 1;

    while (s[start] === s[end] && start >= 0 && end <= s.length - 1) {
      start--;
      end++;
    }

    if (maxEnd - maxStart < end - start) {
      maxStart = start;
      maxEnd = end;
    }

    start = i - 1;
    end = i;

    while (s[start] === s[end] && start >= 0 && end <= s.length - 1) {
      start--;
      end++;
    }

    if (maxEnd - maxStart < end - start) {
      maxStart = start;
      maxEnd = end;
    }
  }

  return s.substring(maxStart + 1, maxEnd);
};
