/*
Link:- 
    https://leetcode.com/problems/median-of-two-sorted-arrays/
    
Example:-
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const sortedArrays = [...nums1, ...nums2].sort((a, b) => a - b);
  const size = sortedArrays.length;
  let median;
  size % 2 == 0
    ? (median = ((sortedArrays[size / 2] + sortedArrays[size / 2 - 1]) / 2).toFixed(5))
    : (median = sortedArrays[parseInt(size / 2)].toFixed(5));
  return median;
};
