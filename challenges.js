//write a function called same frequency
//given two positive integers, find out if the two 
//numbers have the same frequency of digits
// Time: O(N)
//Examples: 
//sameFrequency(182,281) (true)
//sameFrequency(34,14) (false)
//sameFrequency(23948,39284) (true)
//sameFrequency(11, 111) (false)

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) {
        return false;
    }
    
    let frequency1 = {};
    let frequency2 = {};
    
    for(let i = 0; i < strNum1.length; i++) {
        frequency1[strNum1[i]] = (frequency1[strNum1[i]] || 0) + 1;
    }
    
    for(let j = 0; j < strNum1.length; j++) {
        frequency2[strNum2[j]] = (frequency2[strNum2[j]] || 0) + 1;
    }
    for(let key in strNum1) {
        if(frequency1[key] !== frequency2[key]) {
            return false
        }
    }
    return true
  }

  
  //given a sorted array of integers and a target average
  //determine if there are a pair of values in the array where the average pair equals the target average
  // There can be more than one pair that matches the target


// my solution
  function averagePair(arr, num){
    let a = 0;
    let b = 1;
    while(a < b) {
       let mean = (arr[a] + arr[b])/arr.length 
       if(mean === num) {
           return true
       }else if(mean < num) {
           a++
       }else{
           b++
       }
    }
    return false;
  
}

//the solution
function averagePair(arr, num){
    let a = 0;
    let b = arr.length -1;
    while(a < b) {
       let mean = (arr[a] + arr[b])/2
       if(mean === num) return true;
       else if(mean < num) a++
       else b--
       
    }
    return false;
}