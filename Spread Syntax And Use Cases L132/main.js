/*
    [Spread Syntax And Use Cases] L132
    - The spread syntax in JavaScript, denoted by three dots (...), 
    - allows you to expand iterable objects (like arrays or strings) into individual elements. 
    - Spread Operator => ...Itarable
    - Spread with strings = Expand strings
    - Concacatenate Arrays
    - Copy Arrays
    - Push inside array
    - Use with math object
    - Spread with object => Merge Objects
    - More Examples 
*/

console.log("Eslam");
console.log([..."Eslam"]);

// Concacatenate Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1, arr2);
let allArrs = [...arr1, ...arr2];
console.log(allArrs);


// Copy Arrays
let copied = [...arr2];
console.log(copied);


// Push inside array
let myFriends = ["Eslam", "Khaked", "Sara", "Ahmed"],
myNewFriends = ["Aymen", "Mostafa"];
console.log(myFriends, myNewFriends);
// myFriends.push(myNewFriends);
// myFriends.push("Aymen", "Mostafa"); // Default 
myFriends.push(...myNewFriends);
console.log(myFriends);


// Use with math object
let myNums = [10, 30, 500, -100, 1000, 2000];
// console.log(Math.max(myNums)); // NaN
// console.log(Math.max(10, 30, 500, -100, 1000, 2000)); // Default 
console.log(Math.max(...myNums));  // 2000

// Merge Objects

let obj1 = {
    a: 1,
    b: 2,
}
let obj2 = {
    c: 3,
    d: 4,
}
console.log({...obj1, ...obj2, e: 5, f: 6});


// EX 1
const orgArray = [10, 20, 30];
const copiedArray = [...orgArray];
console.log(copiedArray);

// EX 2
const object1 = { foo: 'bar' };
const object2 = { baz: 'qux' };

const mergedObjs = {...object1, ...object2};
console.log(mergedObjs);

// EX 3
const numbers = [20, 40, 60];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers));

// EX 4 Function arguments and parameter lists:
const greet = (name, age) => {
    console.log(`Hello ${name} You Are ${age} Years Old.`);
}
const person = ["Eslam", 21];
greet(...person);