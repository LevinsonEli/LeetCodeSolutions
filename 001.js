/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numsMap = new Map();
  let first_inx = -1;
  let second_inx = -1;

  nums.forEach((num, inx) => numsMap.set(num, inx));
  second_inx = nums.findIndex(
    (num, inx) => numsMap.has(target - num) && inx !== numsMap.get(target - num)
  );
  if (second_inx !== -1) first_inx = numsMap.get(target - nums[second_inx]);

  return [first_inx, second_inx];
};
