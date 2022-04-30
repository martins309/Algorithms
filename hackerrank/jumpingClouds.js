// Return the minimum number of jumps it takes to win the game given an array of binary integers.
//if the integer is 1 then the player must jump because the cloud ins dangerous else if the integer is 0 then it's safe.
// ex: [0 0 1 0 0 1 0]
//output: 4

// function jumpingOnClouds(c) {
    
//     let totalJumps = 0;
//         for (let i = 0; i < c.length; i++) {
//             c[i + 2] == 0 ? i++ : null;
//             totalJumps++;
//         }
//         return totalJumps -1 ;
        
//     }

// var a = 1000;
// function foo() {
//     var a = 1001;
//     function bar() {
//         a++;
//         var a = 1010;
//         console.log(a)
//     }
//     bar()
// }
// foo()

const num1 = function(foo = 110, bar = 201){
    return foo + bar;
}
console.log(num1)

const num2 = ([foo, bar] = [110, 201]) => foo + bar
console.log(num2)
