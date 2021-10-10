//There is a large pile of socks that must be paired by color. 
//Given an array of integers representing the color of each sock, 
//determine how many pairs of socks with matching colors there are.

//There is one pair of color 1 and one of color 2. 
//There are three odd socks left, one of each color. 
//The number of pairs is 2.


function sockMerchant(n, ar) {
    let pairs = 0;
    const sorted = ar.sort((a,b) => a - b);
    for(let i = 0; i < n; i++){
        if(ar[i] === ar[i + 1]){
            pairs++;
            i += 1;
        }
    }
    return pairs;

}
