function validAnagram(anagram1, anagram2){
    if(anagram1.length !== anagram2.length) {
        return false;
    }
  
    
   
    let checkAnagram = {}
    
    for(let i = 0; i < anagram1.length; i++) {
  
       let letter = anagram1[i]
       checkAnagram[letter] ? checkAnagram[letter] += 1 : checkAnagram[letter] = 1;
    }
  
    for(let i = 0; i < anagram2.length; i++) {
      let letter = anagram2[i]
      if(!(checkAnagram[letter])) {
        return false
      }else {
        return checkAnagram[letter] -= 1
      }
    }
    return true
  }
  
  
  console.log(validAnagram("tank", "knat"));