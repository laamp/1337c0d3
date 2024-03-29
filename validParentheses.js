/*
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:
    Input: "()"
    Output: true

    Example 2:
    Input: "()[]{}"
    Output: true

    Example 3:
    Input: "(]"
    Output: false

    Example 4:
    Input: "([)]"
    Output: false

    Example 5:
    Input: "{[]}"
    Output: true
*/

var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push('round');
                break;
            case '[':
                stack.push('square');
                break;
            case '{':
                stack.push('curly');
                break;
            case ')':
                if (stack[stack.length - 1] === 'round') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
                if (stack[stack.length - 1] === 'square') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if (stack[stack.length - 1] === 'curly') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
    }

    return stack.length === 0 ? true : false;
};

console.log(isValid('()'));     // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]'));     // false
console.log(isValid('([)]'));   // false
console.log(isValid('{[]}'));   // true
