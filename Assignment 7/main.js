/*
    [Assignment 7]
*/
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];


console.log([...numsOne, ...numsTwo]); // 1
console.log(numsOne.concat(numsTwo)); // 2
numsOne.push(...numsTwo);
console.log(numsOne); // 3
