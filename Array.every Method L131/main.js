/*
    [Array.every Method] L131
    Syntax {
        array.every(callback[, thisArg])
    }
    Use cases {
        tests whether all elements in an array pass a provided function.
        It returns a Boolean value indicating whether all elements meet the specified condition.
    }
*/

let locations = {
    20: "Place 1",
    30: "Place 1",
    50: "Place 1",
    40: "Place 1",
};
// let mainLocation = 15;
// let locationsarray = Object.keys(locations);
// console.log(locationsarray);

// let locationNumber = locationsarray.map(n => +n);
// console.log(locationNumber);

// let test = locationNumber.every(function(n) {
//     return n > this;
// }, mainLocation);
// console.log(test);

// All in one line
let main = 15;
let check = Object.keys(locations).map(n => +n).every(e => e > main);
console.log(check);






// EX 1
const ex1 =  [2, 4, 6, 8,];
const ellevery = ex1.every(ex1 => ex1 % 2 === 0);
console.log(ellevery); // true
console.log(2 % 2);

// EX 2
let strings = ["Eslam", "Sara", "Ahmed", "Khaled", "Data"];
let allStrings = strings.every(item => typeof item === "string")
console.log(allStrings);

// EX 3
let people = [
    {name: "Eslam", age: 21},
    {name: "Sara", age: 21},
    {name: "Khaled", age: 21},
    {title: "Mai", age: 21},
];
let allHaveName = people.every(person => person.hasOwnProperty("name"));
console.log(allHaveName); // false

// EX 4

let scores = [80, 90, 75, 95, 85];
let Allscores = scores.every(score => score >= 70 && score <= 100);
console.log(Allscores); //true

// EX 5
// let numbers = [1, 2, 3, 4, 5];
let numbers = [-1, -2, -3, -4, -5];

let allGreaterThanZero = numbers.every(function(num) {
    return num < 0;
});
console.log(allGreaterThanZero);
