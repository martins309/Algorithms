// refactored version

function sumZero(arr){
    let left = 0
    //starts at the last index in the array
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
             right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])



function countUniqueValues(arr) {
    i = 0
    j = i + 1
    let sum = i + j
    while(i !== j){
        if(i === j){
            j++;
        }else if(i !== j){
           arr[i] = sum;
        } 
    }

}

countUniqueValues([1,1,1,2,2,3,4,5])