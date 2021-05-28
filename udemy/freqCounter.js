//write a function called same which accpets two arrays
// the function should return true if every value in the array has its corresponding value squared

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr.length; i++) {
        // what is the indexOf 1^2 in arr2 and so on
        let correctIndex = arr2.indexOf(arr[i] **2)
        // if the correctIndex is not in there 
        if(correctIndex === -1) {
            return false
        }
        //remove the element at the indexOf 1
        arr2.splice(correctIndex, 1)
    }
    return true
}
