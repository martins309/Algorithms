// return the number of 'a' occurence in the first n numbers of an ifinite string


function repeatedString(s, n) {
    let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
let remainder = n % s.length
let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length

return count + remainderCount

}
