/**
 * Given a 1 indexed array of integers 'numbers' that is already sorted in ascending order, find two numbers such that they add up to a specific 'target' number
 * Let these two numbers be numbers[index1], and numbers[index2] where i <= index1 < index2 <= numbers.length
 * 
 * return the indicies of the two numbers index and index2 added by one as an integer array [index1, index2] of length 2.
 * 
/**
 */

//Example 1
// Input: numbers = [2,7,11,15], target 9
//Output: [1,2]
//Explanation The sum of 2 and 7 is 9. Therefore, index1 = 1 and index2 = 7, we return [1,2]
 
function twoSum(numbers, target)  {
    for(let i = 1; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++){
            numbers[i] + numbners[j] === target ? [numbers[i], numbers[j]] : -1 
        }
    }
}