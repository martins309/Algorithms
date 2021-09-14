//return an array with the score of the first triplet "a" and the second triplet "b"
//when comparing which of the elements in both trplets are greater than the other
// examples a: [1,2,3]; b:[3,2,3] 
//return [a,b] = [0,1]

function compareTriplets(a, b) {
    let countA = 0;
    let countB = 0;
     if(a.length > 3 || b.length > 3){
         return -1;
     }
      for(let i = 0; i < a.length; i++){
          if(a[i] > b[i]){
              countA++;
          }else if(b[i] > a[i]){
              countB++;
          }else {
              a[i] != b[i];
          }
         
      }
     return [countA, countB];
     
 
 }