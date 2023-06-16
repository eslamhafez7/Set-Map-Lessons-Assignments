/*
    [Array.copyWithin Method] L129
    Array.copyWithin(Target, Start, => Optional, end => Optional)
        - "Copy part of an array to another location in the same array"
        - Any negative value will count from the end
    Target => {
        Index to copy part to
        If at or greater than array length nothing will be copied
    }
        Start => {
        Index to start copying from 
        If ommited = Start from index 0
    }
    end {
        Index to end copying from
        Not including the end
        If ommited = Reach the end
    }
*/

let myArray = [10, 20, 30, 40, 50, "A","B"];
// myArray.copyWithin(3);
// myArray.copyWithin(4, 6);
// myArray.copyWithin(1, -2, -1);
// myArray.copyWithin(4, 6)
// myArray.copyWithin(-3, 6);
// myArray.copyWithin(1, -2);
myArray.copyWithin(1, -2, -1);
console.log(myArray);

