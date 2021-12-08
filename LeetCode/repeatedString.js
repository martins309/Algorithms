// return the number of 'a' occurence in the first n numbers of an ifinite string


function repeatedString(s, n) {
    let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
let remainder = n % s.length
let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length

return count + remainderCount

}


//study this solution

function repeatedString(s, n) {
    let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    counter = counter * fracNumber;
    for (let index = 0; index < reminder; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    return counter;
}