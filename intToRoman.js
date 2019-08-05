/*
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.
*/

const intToRoman = num => {
    let numeral = '';

    while (num >= 1000) {
        numeral += 'M';
        num -= 1000;
    }
    if (Math.floor(num / 100) === 9) {
        numeral += 'CM';
        num -= 900;
    }
    while (num >= 500) {
        numeral += 'D';
        num -= 500;
    }
    if (Math.floor(num / 100) === 4) {
        numeral += 'CD';
        num -= 400;
    }
    while (num >= 100) {
        numeral += 'C';
        num -= 100;
    }
    if (Math.floor(num / 10) === 9) {
        numeral += 'XC';
        num -= 90;
    }
    while (num >= 50) {
        numeral += 'L';
        num -= 50;
    }
    if (Math.floor(num / 10) === 4) {
        numeral += 'XL';
        num -= 40;
    }
    while (num >= 10) {
        numeral += 'X';
        num -= 10;
    }
    if (num === 9) {
        numeral += 'IX';
        num -= 9;
    }
    while (num >= 5) {
        numeral += 'V';
        num -= 5;
    }
    if (num === 4) {
        numeral += 'IV';
        num -= 4;
    }
    while (num >= 1) {
        numeral += 'I';
        num -= 1;
    }

    return numeral;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // M CM XC IV
