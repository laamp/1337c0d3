/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (!/^[a-z0-9]+$/i.test(s[start])) {
            start++;
            continue;
        }

        if (!/^[a-z0-9]+$/i.test(s[end])) {
            end--;
            continue;
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false