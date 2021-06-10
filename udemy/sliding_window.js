//sliding window
//Invilves creating a window which can either be an array or number from one position to another

// depening on the condition the window increases or closes  and a new window is created
// useful for keeping track of a subset of data in an array/string 

//write a function called maxSubarraySum which accepts an array of integers and a number called n. 
//The function should calculate the maximum sum of n consecutive elements in the array. 

//naive approach
function maxSubarraySum(arr, num) {
    if(num > arr.length){
        return null
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0 
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}
