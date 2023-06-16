/*
    [Array.some() Method] L130
    Array.some(CallBackFunction(element, index, array), this argumnet)
        CallBackFunction => Function to run on every element on the array
        Element => The current element to process
        Index => Index of current element
        Array => The current array working with
        This argument => Value to use as this when executing callBackFunction
    Usage {
        Chek if element exists in array
        Check if number in range
    }
*/
let nums = [1, 2, 3, 4, 5, 6, 7, 10];

// let check = nums.some(function(e) {
//     return e >= 7;
// });
// let check = nums.some((e) => e >= 7);
// console.log(check);
let mynumber = 9;

// let check = nums.some(function(e) {
//     console.log("test"); // 7
//     return e > this;
// }, mynumber)
// console.log(check);


function checkValues(arr, val) {
    return arr.some(function(e) {
        return e === val;
    });
}
console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
    min: 10,
    max: 20,
}
let checkRange = nums.some(function(e) {
    console.log(this.min)
    console.log(this.max)
    return e >= this.min && e <= this.max;
}, range);

console.log(checkRange);