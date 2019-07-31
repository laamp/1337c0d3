const isPalindrome = n => {
    return n.toString().split('').reverse().join('') === n.toString().split('').join('');
};

console.log(isPalindrome(123)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(7667)); // true
