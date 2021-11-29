// a hiker keeps a meticulous record of his hikes, and for everystep it was noted that 'U' is uphill and 'D' is downhill
//The hike always starts at sea level and each step up or down represents 1 unit change in altitude 
// A mountainous sequence always starts up and ends down
//a valley sequence always starts down and ends up
// given the sequence, return the number of valleys walked through
//ex: 8
//    UDDDUDUU
// OUTPUT: 1


function countingValleys(steps, path) {
    let counter = 0;
    let valleyCount = 0; 
    
    for(let i = 0; i <= steps; i++) {
      path[i] == 'D' ? counter++ : counter--
        
        path[i] == 'U' && counter == 0 ? valleyCount++ : null;
    }
    
    return valleyCount;
        
}
