const climbStairs = n => {
    let memo = [];

    return climber(n, memo);
};

const climber = (n, memo) => {
    if (memo[n]) return memo[n];

    let paths = 0;

    // if n is zero we know this is the end of a valid path
    if (n === 0) return 1;

    // if n is less than zero we know this path doesn't work
    if (n < 0) return 0;

    // otherwise branch out 1 and 2 steps again
    paths += climber(n - 1, memo);
    paths += climber(n - 2, memo);

    memo[n] = paths;

    return paths;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(100000)); // 3