/**
* @param {number} rowIndex
* @return {number[]}
*/
var getRow = function (rowIndex) {
    let kthRow = [1];

    while (rowIndex > 0) {
        let nextRow = [];
        for (let i = 0; i <= kthRow.length; i++) {
            let ele1 = kthRow[i - 1];
            let ele2 = kthRow[i];

            if (!ele1) ele1 = 0;
            if (!ele2) ele2 = 0;

            nextRow.push(ele1 + ele2);
        }
        kthRow = nextRow;

        rowIndex--;
    }

    return kthRow;
};