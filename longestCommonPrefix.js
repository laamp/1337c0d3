/*
    Example 1:
    Input: ["flower","flow","flight"]
    Output: "fl"

    Example 2:
    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

const longestCommonPrefix = strs => {
    if (strs.length === 1) return strs[0];
    if (strs.length === 0) return '';

    let prefix = '';
    let index = 0;
    let matching = true;

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length === 0) return '';
    }

    while (matching) {
        let currChar = strs[0][index];
        if (!currChar) return prefix;

        for (let i = 1; i < strs.length; i++) {
            if (currChar !== strs[i][index]) {
                matching = false;
                break;
            }
        }

        index++;
        if (matching) prefix += currChar;
    }

    return prefix;
};

console.log(longestCommonPrefix(['c', 'c']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
