/*
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

    Example:
    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/

const keys = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

let combinations = [];

const buildCombos = (combination, nextDigits) => {
    if (nextDigits.length <= 0) {
        combinations.push(combination);
    } else {
        for (let i = 0; i < keys[nextDigits[0]].length; i++) {
            buildCombos(combination + keys[nextDigits[0]][i], nextDigits.slice(1));
        }
    }
};

const letterCombinations = digits => {
    if (digits.length > 0) buildCombos('', digits);

    return combinations;
};

console.log(letterCombinations("23"));
