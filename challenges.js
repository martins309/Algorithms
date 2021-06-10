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

  
  //