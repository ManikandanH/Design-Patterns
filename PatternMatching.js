// import { print } from './print'
const { print } = require('./print')
 
function findIndex(string, char, nextChar) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            if (nextChar === '*') {
                return i;
            } else if (nextChar === string[i + 1]) {
                return i;
            }
        }
    }

    return -1;
}

function pattern(filename, patternStr) {
    let fileNameIndex = 0;
    let patternStrIndex = 0;
    while (patternStrIndex !== patternStr.length) {
        if (patternStr[patternStrIndex] !== '*') {
            if (filename[fileNameIndex] !== patternStr[patternStrIndex]) {
                return false
            }
            fileNameIndex++;
        } else {
            fileNameIndex = findIndex(filename, patternStr[patternStrIndex + 1], patternStr[patternStrIndex + 2])
        }
        patternStrIndex++;
    }
    return filename.length === fileNameIndex || fileNameIndex === -1 ? true : false
}

print(pattern('large_text.txt', 'la*t.tt'))