// 'use strict';

// function isPrime(maxNum){
//     let arrPrime = [];
//     for (let i = 2; i < maxNum; i++) {
//         let isNumPrime = true;
//         for(let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isNumPrime = false;
//                 break;
//             } 
//         }
//         if (isNumPrime) {
//             arrPrime.push(i);
//         }
//     }
//     return arrPrime;
// };
// console.log(isPrime(10));


"Reverse string problem "

const string = 'bingo'

//the reverse string function
const reverseString = (string) => {
    let newString = ''
    for (let i = string.length -1 ; i >= 0; i--) {
        newString += string[i] 
    }
    console.log(newString); 
}

reverseString(string);



// Palindrome Problem 

// const isPalindrome = 'radar'
// const notPalindrome = 'book'

// const palindrome = (string) => {
//     let newString = ''
//     for (let i = string.length -1 ; i >= 0; i--) {
//         newString += string[i] 
//     }
//     if(newString === string) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log('Should return true :', palindrome(isPalindrome));
// console.log('Should return false: ', palindrome(notPalindrome));


// const number1 = 5
// const number2 = 10

// const multiply = (number1, number2) => {
//     let product = 0
//     for(let i = 0; i <= number2 - 1; i++) {
//         product += number1
//     }
//     return product;
// }
// console.log('The product is: ', multiply(number1, number2));



// const matrix = [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1]

// const island = (matrix) => {
//     let number = 0 
//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = matrix[i] + 1; j < matrix.length; i++) {
//             if(matrix[i] === 0 && matrix[j] === 1) {
                
//             }
//         }
//     }
// }


// const nums = [2,6,9,10]

// let sumNum = (nums, target) => {
// for(let i = 0; i <= nums.length; i ++) {
//     for(let j = i + 1; j <= nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }



