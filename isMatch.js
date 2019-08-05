/*
 - s can be empty
 - s is only a-z
 - p can be empty
 - p is only a-z, ., and *
 - '.' represents any character
 - '*' represents the preceding character repeated zero or more times

 isMatch('aa', 'a') => false
 isMatch('aa', 'a*') => true
 isMatch('ab', '.*') => true
 isMatch('aab', 'c*a*b') => true
 isMatch('mississippi', 'mis*is*p*.') => false

*/

const isMatch = (s, p) => {
    if (!p.length) {
        if (!s.length) {
            return true;
        }
        else {
            return false;
        }
    }

    let firstMatch = ((s.length > 0) && (p[0] === s[0] || p[0] === '.'));

    if (p.length >= 2 && p[1] == '*') {
        return (isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p)));
    } else {
        return firstMatch && isMatch(s.slice(1), p.slice(1));
    }
};

console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('aaa', 'a*a')); // true
console.log(isMatch('aaa', 'ab*a*c*a')); // should be true
