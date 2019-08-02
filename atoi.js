/*
    Test cases:
    - 42 => 42
    - -42 => -42
    - "   300" => 300
    - 1249 and words => 1249
    - words and 3040 => 0

    Things you can encounter:
    - a space
    - a '+' or '-'
    - a number 0 - 9
    - anything else
*/

function atoi(str) {
    let firstPass = '';
    let stringStarted = false;
    let positive = true;
    let signFound = false; // may not need this since I have stringStarted

    for (let i = 0; i < str.length; i++) {
        //string hasn't started yet
        if (!stringStarted) {
            // number hasn't started and space is encountered
            if (str[i] === ' ') {
                continue;
            }

            // no sign had been found yet
            if (!signFound) {
                // number hasn't started and plus is encountered
                if (str[i] === '+') {
                    stringStarted = true;
                    positive = true;
                    signFound = true;
                    continue;
                }

                // number hasn't started and minus is encountered
                if (str[i] === '-') {
                    stringStarted = true;
                    positive = false;
                    signFound = true;
                    continue;
                }
            }

            // number hasn't started and you find a number
            if (/[0-9]/.test(str[i])) {
                stringStarted = true;
                firstPass += str[i];
                // no sign had been found yet
                if (!signFound) {
                    positive = true;
                    signFound = true;
                }
            } else {
                return 0;
            }
        } else {
            if (/[0-9]/.test(str[i])) {
                firstPass += str[i];
            } else {
                break;
            }
        }
    }

    let finalNumber = 0;
    if (positive) {
        finalNumber = +firstPass;
    } else {
        finalNumber = -(+firstPass);
    }

    if (finalNumber < -(Math.pow(2, 31))) finalNumber = -(Math.pow(2, 31));
    if (finalNumber > Math.pow(2, 31) - 1) finalNumber = Math.pow(2, 31) - 1;

    return finalNumber;
}

console.log(atoi('-42'));
