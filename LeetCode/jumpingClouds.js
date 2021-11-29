// Return the minimum number of jumps it takes to win the game given an array of binary integers.
//if the integer is 1 then the player must jump because the cloud ins dangerous else if the integer is 0 then it's safe.
// ex: [0 0 1 0 0 1 0]
//output: 4

function jumpingOnClouds(c) {
    
    let totalJumps = 0;
        for (let i = 0; i < c.length; i++) {
            c[i + 2] == 0 ? i++ : null;
            totalJumps++;
        }
        return totalJumps -1 ;
        
    }

