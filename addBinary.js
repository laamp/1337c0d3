const addBinary = function(a, b) {
    let sum = '';
    let aPtr = a.length - 1;
    let bPtr = b.length - 1;
    let carry = 0;

    while (a[aPtr] || b[bPtr]) {
        let tempA = parseInt(a[aPtr]);
        let tempB = parseInt(b[bPtr]);

        if (!a[aPtr]) tempA = 0;
        if (!b[bPtr]) tempB = 0;

        let currSum = carry + tempA + tempB;
        console.log(`current sum ${currSum}`);

        if (currSum <= 1) {
            sum = currSum.toString() + sum;
            carry = 0;
        } else {
            sum = (currSum - 2).toString() + sum;
            carry = 1;
        }

        aPtr--;
        bPtr--;
    }
    
    if (carry > 0) sum = '1' + sum;

    return sum;
};

// 3 + 1 = 4
console.log(addBinary('11', '1')); // 100

// 10 + 11 = 21
console.log(addBinary('1010', '1011')); // 10101

/*

11 1
1 + 1 = 2, 0 carry 1
1 + 1 = 2, 0 carry 1
1 = 1


1111, 11111
1 + 1 = 2, - 2 = 0, carry 1
1 + 1 + 1 = 3

*/