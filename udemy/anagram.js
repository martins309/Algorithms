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










  function validAnagram(anagram1, anagram2){
    if(anagram1.length !== anagram2.length) {
        return false;
    }
  
    
    let checkAnagram = {}
   
    for(let i = 0; i < anagram1.length; i++) {
        let letter = anagram1[i]
        checkAnagram[letter] ? checkAnagram[letter] += 1 : checkAnagram[letter] = 1
    }
    
    for(let i = 0; i < anagram2.length; i++) {
        let letter = anagram2[i]
        if(!(checkAnagram[letter])){
            return false
        }else {
            checkAnagram[letter] -= 1
        }
    }
    return true
  }
  
  validAnagram("tank", "knat");

  //write a function to check to see if a word is an anagram
  // anagram is word that when the letters are rearranged becomes a new word 


  function walidAnagram(anagram1, anagram2) {
    if(anagram1.length < anagram2.length) {
      return false;
    }

    //create an object 

   let checkAnagram = {};

    for(let i = 0; i < anagram1.length; i++) {
      let letter = anagram1[i];
      checkAnagram[letter] = (checkAnagram[letter] || 0) + 1
    }
    for(let j = 0; j < anagram2.length; j++) {
      let letter = anagram2[i];
      if(!checkAnagram[letter]) {
        return false
      }else{
        return checkAnagram[letter] -= 1
      }
    }
    return true;
  }
  validAnagram("cat", "act");




















