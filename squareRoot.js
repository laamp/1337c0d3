const sqrt = x => {
    for (let i = 0; i <= x; i++) {
        if (i * i === x) return i;
        if (i * i > x) return i - 1;
    }
};

console.log(sqrt(4)); // 2

console.log(sqrt(8)); // 2

console.log(sqrt(0)); // 0

console.log(sqrt(1)); // 1
