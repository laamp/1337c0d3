const maxArea = height => {
    console.time();
    let hiScore = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const lowestEnd = height[i] > height[j] ? height[j] : height[i];
            const currentArea = lowestEnd * (j - i);
            if (currentArea > hiScore) hiScore = currentArea;
        }
    }

    console.timeEnd();
    return hiScore;
};

const betterMaxArea = height => {
    console.time();
    let hiScore = 0;

    // while the right index is greater than the left
    // calculate the area between the two indices
    // then move the index with the lower height inward

    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const lowestEnd = height[l] > height[r] ? height[r] : height[l];
        const currentArea = lowestEnd * (r - l);
        if (currentArea > hiScore) hiScore = currentArea;

        if (height[l] < height[r]) l++;
        else r--;
    }

    console.timeEnd();
    return hiScore;
};

const bigArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

console.log(maxArea(bigArray));
console.log(betterMaxArea(bigArray));
