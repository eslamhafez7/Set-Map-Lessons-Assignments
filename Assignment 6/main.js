/*
    [Assignment 6]
    Needed Output  {
    1- ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
    2- ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
    3- ["Z", "Y", "Z", "Y", "A", "D", "E"]
    }
*/

/* // 1
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.sort()
console.log(chars.copyWithin(0, 3, 6));
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
*/


/* // 2
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars.sort();
// [10, 15, 20, 6, 'A', 'B', 'C', 'D', 'E']
console.log(chars.copyWithin(0, 4, -1));
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
*/

// 3
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars.copyWithin(2));
//  ['Z', 'Y', 'Z', 'Y', 'A', 'D', 'E']