//return to maximum sum of an hourglass pattern in a 2D array
//Hourglass pattern is a b c
//                       d
//                     e d g
// Array is 6x6
// 111000
// 010000
// 101000
// 000000
// 000000
// 000000

function hourglassSum(arr) {
    let maxTotal = -63;
    for(let i = 0; i < arr.length -2; i++){
        for(let j = 0; j < arr.length -2; j++){
            let current = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
            arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
           maxTotal = Math.max(maxTotal, current)
        }
    }
    return maxTotal;
}