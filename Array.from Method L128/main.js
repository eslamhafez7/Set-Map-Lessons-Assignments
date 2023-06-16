/*
    [Array.from Method] L128
    - An iterable object to convert to an array.
    -  Array.from(Iterable, MapFunction, This)
        - Variable
        - String Numbers
        - Set
        - Using The MAp Function
        - Arrow Function
        - Shorten' the Method + Use arguments
*/

console.log(Array.from("123456"));

console.log(
    Array.from("Eslam", function(n) {
        return n + n;
    }),
);

console.log(
    Array.from("123456", function(n) {
        return +n + +n;
    }),
);
console.log(Array.from("6789", (n) => +n * +n));



let mynewArray = [1, 7, 2, 4, 7, 4, 1, 4];

let myset = new Set(mynewArray);
let myFromArray = Array.from(myset);
console.log(myFromArray);

console.log([...new Set(mynewArray)]); // Same Result without using Array.from(itarable)
// ... => spread syntax ... is used to convert the Set object back into an array.
function af() {
    return Array.from(arguments);
};

console.log(af("Eslam", "Sara", "Ahmed", "Saleh"))

console.log("#".repeat(30));

// 1 
let str = "Eslam Hafez";
let frm = Array.from(str);
console.log(frm.length);
console.log(frm);

// 2
let set = new Set(['apple', 'banana', 'orange']);
console.log(set);
let arr = Array.from(set);
console.log(arr);

// 3
let map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
let arrmap = Array.from(map);
console.log(map);
console.log(arrmap);

// 4
let elements = document.querySelectorAll('.item');
let elearr = Array.from(elements);
console.log( (elearr));

// 5
const numarr = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(numarr);
/* In JavaScript, using an underscore (_) as a parameter name in a function indicates that
the parameter is intentionally unused or ignored. It is a convention to indicate that the
value of that parameter is not needed or used within the function body.
 */
function exampleFunc(_, b) {
    console.log(b);
}

exampleFunc('ignored', 'value'); // value
