function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

//can you check the result
//can you derive the result differently
//can you understand it at a glance
//can you use the resukt or method for some other problem
//can you improve the performance of your solution
//can you thinkk of other ways to refactor
//How have other people solved this problem