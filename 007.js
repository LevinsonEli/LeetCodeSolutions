/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversedNum = 0;
  let absoluteInput = Math.abs(x);
  let MIN_NUM = Math.pow(-2, 31);
  let MAX_NUM = Math.pow(2, 31) - 1;

  while (absoluteInput !== 0) {
    reversedNum = reversedNum * 10 + (absoluteInput % 10);
    absoluteInput = Math.floor(absoluteInput / 10);
  }

  reversedNum = parseInt(reversedNum);

  if (reversedNum < MIN_NUM || reversedNum > MAX_NUM)
    reversedNum = 0;

  reversedNum = x < 0 ? reversedNum * -1 : reversedNum;

  return reversedNum;
};
