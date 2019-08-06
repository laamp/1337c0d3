/*
    Given an array nums of n integers, are there elements a, b, c in nums such 
    that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

    Note:
    The solution set must not contain duplicate triplets.

    Example:
    Given array nums = [-1, 0, 1, 2, -1, -4]

    A solution set is:
    [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
*/

var threeSum = function (nums) {
    let sets = [];
    nums.sort((a, b) => a < b ? -1 : 1);

    for (let l = 0; l < nums.length - 2; l++) {

        let middle = l + 1;
        let r = nums.length - 1;

        if (l > 0 && nums[l] === nums[l - 1]) continue;

        while (middle < r) {
            let currentSum = nums[l] + nums[middle] + nums[r];

            if (currentSum < 0) {
                middle++;
            } else if (currentSum > 0) {
                r--;
            } else {
                sets.push([nums[l], nums[middle], nums[r]]);
                while (nums[middle] === nums[middle + 1]) middle++;
                while (nums[r] === nums[r - 1]) r--;
                middle++;
                r--;
            }
        }
    }

    return sets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
