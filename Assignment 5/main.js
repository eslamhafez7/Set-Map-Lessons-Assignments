/*
    [Assignment 5]
*/
let theName = "Elzero";

let name = Array.from(theName);
console.log(name);

let set = new Set(theName);
console.log(set);

let array = Array.from(theName).copyWithin(0);
array.copyWithin(0);
console.log(array);

console.log([...theName]);
console.log(Object.assign([], theName));
console.log(theName.split(""));