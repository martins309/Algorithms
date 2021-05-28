//this pattern involves diving a data set into smaller chunks and then repeating a process with a subset of data
//This pattern can tremendously decrease time complexity
//binary search is an example of a divide and conquer

//naive solution 
function search(arr, val){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
