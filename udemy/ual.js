// console.log(" I am a master")

// let cars = {
//     honda: 'si',
//     toyota: 'supra',
//     audi: 'r8'

// }


// return Object.keys(cars);


// function same(arr1, arr2) {
    //if the first array is larger than the second array then it will return false..
    // if(arr1.length !== arr2.length) {
        // return false;
    // }
   // iterates throught the array
//    for(let i = 0; i < arr1.length; i++){
       //loop over the first away and call indexOf where we pass in the square of the first array
    //    let correctIndex = arr2.indexOf(arr[i] ** 2)
       //if the index does not exist(-1) then return false
    //    if(correctIndex === -1) {
    //        return false;
    //    }
      // removes each element in the array if true 
//        arr2.splice(correctIndex,1)
//    }
//    return true;
// }


// write down the steps that you need to take rather than trying to think about everything in your head. Helps to highlight steps that you are not confident about


function charCount(str) {
    //make object to return at end
    
    //loop over string, for each character
    let result = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    };
        // if character is something else (space, period, etc) dont do anything
    //return object at the end
    return result;
};
console.log(charCount("enumerable"));