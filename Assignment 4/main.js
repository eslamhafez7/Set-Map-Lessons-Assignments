/*
    [Assignment 4]
*/
let theNumber = 100020003000;

// console.log(...new Set(Array.from(theNumber.toString()).filter(n => n !== "0").join("")));
console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));