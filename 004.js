/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length)
        return findMedianSortedArrays(nums2, nums1);

    let start = 0;
    let end   = nums1.length;

    while (start <= end) {
        const partitionNums1 = Math.floor((start + end) / 2),
              partitionNums2 = Math.floor((nums1.length + nums2.length + 1) / 2) - partitionNums1,
              maxLeftNums1   = (partitionNums1 === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionNums1 - 1],
              maxLeftNums2   = (partitionNums2 === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionNums2 - 1],
              minRightNums1  = (partitionNums1 === nums1.length) ? Number.POSITIVE_INFINITY : nums1[partitionNums1],
              minRightNumsY  = (partitionNums2 === nums2.length) ? Number.POSITIVE_INFINITY : nums2[partitionNums2];

        if (maxLeftNums1 <= minRightNumsY && maxLeftNums2 <= minRightNums1) {
            if ((nums1.length + nums2.length) % 2 === 0)
                return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNumsY)) / 2;
            else
                return Math.max(maxLeftNums1, maxLeftNums2);
        } else if (maxLeftNums1 > minRightNumsY)
            end = partitionNums1 - 1;
        else
            start = partitionNums1 + 1;
    }

    return undefined;
};
