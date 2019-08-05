const romanToInt = s => {
    let num = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'M') num += 1000;
        //900
        else if (s.slice(i, i + 2) === 'CM') {
            num += 900;
            i++;
        }
        else if (s[i] === 'D') num += 500;
        //400
        else if (s.slice(i, i + 2) === 'CD') {
            num += 400;
            i++;
        }
        else if (s[i] === 'C') num += 100;
        //90
        else if (s.slice(i, i + 2) === 'XC') {
            num += 90;
            i++;
        }
        else if (s[i] === 'L') num += 50;
        //40
        else if (s.slice(i, i + 2) === 'XL') {
            num += 40;
            i++;
        }
        else if (s[i] === 'X') num += 10;
        //9
        else if (s.slice(i, i + 2) === 'IX') {
            num += 9;
            i++;
        }
        else if (s[i] === 'V') num += 5;
        //4
        else if (s.slice(i, i + 2) === 'IV') {
            num += 4;
            i++;
        }
        else if (s[i] === 'I') num += 1;
    }

    return num;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
