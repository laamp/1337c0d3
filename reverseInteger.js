const reverse = x => {
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = Math.abs(x);
    }

    let nums = [];
    while (x >= 10) {
        nums.unshift(x % 10);
        x = Math.floor(x / 10);
    }
    nums.unshift(x);

    let multiplier = 1;
    let sum = 0;
    nums.forEach(num => {
        sum = sum + (num * multiplier);
        multiplier *= 10;
    });

    return isNegative ? -sum : sum;
};

// console.log(reverse(123)); // 321
// console.log(reverse(-456)); // -654
// console.log(reverse(1200000000000)); // 21

console.log(reverse(10));
