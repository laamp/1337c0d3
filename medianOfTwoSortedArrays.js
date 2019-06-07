/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity
should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

function findMedian(nums1, nums2) {
  let bigArr = [];

  while ((nums1.length > 0) || (nums2.length > 0)) {
    if (nums1.length <= 0) {
      bigArr.push(nums2.shift());
    } else if (nums2.length <= 0) {
      bigArr.push(nums1.shift());
    } else if (nums1[0] < nums2[0]) {
      bigArr.push(nums1.shift());
    } else {
      bigArr.push(nums2.shift());
    }
  }

  const len = bigArr.length;
  if (len % 2 !== 0) {
    const median = bigArr[Math.floor(len / 2)];
    return median;
  } else {
    const left = bigArr[len / 2 - 1];
    const right = bigArr[len / 2];
    return (left + right) / 2.0;
  }
}

let arr1 = [1, 3];
let arr2 = [2];
console.log(findMedian(arr1, arr2));

let arr3 = [1, 2];
let arr4 = [3, 4];
console.log(findMedian(arr3, arr4));
