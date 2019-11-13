/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = [];

    while (numRows > 0) {
        if (triangle.length === 0) {
            triangle.push([1]);
            numRows--;
            continue;
        }

        let current = [];
        let prevLevel = triangle[triangle.length - 1];
        for (let i = 0; i <= prevLevel.length; i++) {
            let ele1 = prevLevel[i - 1];
            let ele2 = prevLevel[i];

            if (!ele1) ele1 = 0;
            if (!ele2) ele2 = 0;

            current.push(ele1 + ele2);
        }

        triangle.push(current);

        numRows--;
    }

    return triangle;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));
console.log(generate(1000));