/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length)
        return findMedianSortedArrays(nums2, nums1);

    let   start   = 0,
          end     = nums1.length;

    while (start <= end) {
        const partitionX = Math.floor((start + end) / 2),
              partitionY = Math.floor((nums1.length + nums2.length + 1) / 2) - partitionX,
              maxLeftX   = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1],
              maxLeftY   = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1],
              minRightX  = (partitionX === nums1.length) ? Number.POSITIVE_INFINITY : nums1[partitionX],
              minRightY  = (partitionY === nums2.length) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((nums1.length + nums2.length) % 2 === 0)
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            else
                return Math.max(maxLeftX, maxLeftY);
        } else if (maxLeftX > minRightY)
            end = partitionX - 1;
        else
            start = partitionX + 1;
    }

    return undefined;
};

console.log(Number.NEGATIVE_INFINITY = -1);