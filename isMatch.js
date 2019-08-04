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

// need to handle starmode w/ wildcard

const isMatch = (str, pattern) => {
    let i;
    let j = 0;
    for (i = 0; i < pattern.length;) {
        let starMode = false;
        let wildcard = false;
        let repeatAfterStar = false;

        if (pattern[i + 1] === '*') {
            starMode = true; // check next char for *
            if (pattern[i + 2] === pattern[i]) repeatAfterStar = true;
        }
        if (pattern[i] === '.') wildcard = true; // check if current char is .

        if (!starMode) {
            if (pattern[i] === str[j]) { // current char matches pattern char
                i++;
                j++;
            } else if (wildcard) {
                i++;
                j++;
            } else { // return false early if mismatch is discovered
                console.log("mismatch found returning false early");
                return false;
            }
        } else { // currently in starmode
            if (!wildcard) {
                while (pattern[i] === str[j]) { // at least one matching char is found
                    j++; // move to next character in the string
                }
            } else {
                while (str[j]) {
                    j++;
                }
            }

            i += 2; // move past * in pattern
            if (repeatAfterStar) i++;
        }
    }

    if ((i === pattern.length) && (j === str.length)) {
        return true;
    } else {
        return false;
    }
};

console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('aaa', 'a*a')); // true
console.log(isMatch('aaa', 'ab*a*c*a')); // should be true
