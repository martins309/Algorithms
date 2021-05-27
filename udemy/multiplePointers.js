//Multiple pointers pattern
//creating pointers or values that correspond to an index or aposition and move towards the beginning, and or middle based on a certain condition;

// Example : Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. 
//Return an array that includes both values that sum to zero or undefined

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,-1,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

//naive example

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i] + arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])