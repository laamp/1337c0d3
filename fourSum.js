/*
    Given an array nums of n integers and an integer target, are there elements
     a, b, c, and d in nums such that a + b + c + d = target? Find all unique
      quadruplets in the array which gives the sum of target.

    Note:
    The solution set must not contain duplicate quadruplets.

    Example:
    Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
    A solution set is:
    [
        [-1,  0, 0, 1],
        [-2, -1, 1, 2],
        [-2,  0, 0, 2]
    ]
*/

var fourSum = function (nums, target) {
    let validSets = [];

    nums.sort((a, b) => a < b ? -1 : 1);

    for (let a = 0; a < nums.length - 3; a++) {
        if ((a - 1 >= 0) && nums[a] === nums[a - 1]) continue;
        for (let b = a + 1; b < nums.length - 2; b++) {
            if ((b - 1 > a) && nums[b] === nums[b - 1]) continue;
            for (let c = b + 1; c < nums.length - 1; c++) {
                if ((c - 1 > b) && nums[c] === nums[c - 1]) continue;
                for (let d = c + 1; d < nums.length; d++) {
                    if ((d - 1 > c) && nums[d] === nums[d - 1]) continue;
                    let currentSum = nums[a] + nums[b] + nums[c] + nums[d];
                    if (currentSum === target) {
                        validSets.push([nums[a], nums[b], nums[c], nums[d]]);
                    }
                }
            }
        }
    }

    return validSets;
};

var fourSum2 = function (nums, target) {
    let ret = [];

    if (nums.length == 0)
        return ret;

    nums.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < nums.length; i++) {
        let target2 = target - nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let target3 = target2 - nums[j];

            let front = j + 1;
            let back = nums.length - 1;

            while (front < back) {
                let sum = nums[front] + nums[back];

                if (sum < target3)
                    front++;

                else if (sum > target3)
                    back--;

                else {
                    let temp = new Array(4);
                    temp[0] = nums[i];
                    temp[1] = nums[j];
                    temp[2] = nums[front];
                    temp[3] = nums[back];
                    ret.push(temp);

                    while (front < back && nums[front] === temp[2])
                        front++;

                    while (front < back && nums[back] === temp[3])
                        back--;
                }
            }

            while (j + 1 < nums.length && nums[j + 1] === nums[j])++j;
        }

        while (i + 1 < nums.length && nums[i + 1] === nums[i])++i;
    }

    return ret;
};

console.log(fourSum2([1, 0, -1, 0, -2, 2], 0));
