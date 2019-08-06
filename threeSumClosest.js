/*
    Given an array nums of n integers and an integer target, find three integers
    in nums such that the sum is closest to target. Return the sum of the three
    integers. You may assume that each input would have exactly one solution.

    Example:
    Given array nums = [-1, 2, 1, -4], and target = 1.
    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function (nums, target) {
    let closestSum = Infinity;
    nums.sort((a, b) => a < b ? -1 : 1);

    for (let l = 0; l < nums.length - 2; l++) {

        let middle = l + 1;
        let r = nums.length - 1;

        while (middle < r) {
            let currentSum = nums[l] + nums[middle] + nums[r];
            let distanceToTarget = Math.abs(target - currentSum);

            if (currentSum < target) {
                middle++;
            } else if (currentSum > target) {
                r--;
            } else {
                return target;
            }

            if (distanceToTarget < Math.abs(target - closestSum)) closestSum = currentSum;
        }
    }

    return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2

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
