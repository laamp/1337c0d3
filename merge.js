var merge = function(nums1, m, nums2, n) {
    let length = m + n;
    m--;
    n--;

    while (length > 0) {
        length--;

        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[length] = nums1[m];
            m--;
        } else {
            nums1[length] = nums2[n];
            n--;
        }
        console.log(`length: ${length}, m: ${m}, n: ${n}`);
    }
};

let arr1 = [1,2,3,0,0,0];
let arr1Size = 3;

let arr2 = [2,5,6];
let arr2Size = 3;

merge(arr1, arr1Size, arr2, arr2Size);

console.log(arr1);

/*

3 [1,2,3,0,0,0] 3 [2,5,6]

*/