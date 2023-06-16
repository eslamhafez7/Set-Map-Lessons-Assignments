/*
    Set Data Types And Methods L123
    - new Set(itarable)
        - console.log(typeof new Set()); // Object
        - Set reqires new
        - Object to store unique values
        - cannot access elements by index
    Properties {
        - size
    }
    Methods {
        - add // Appends a new element with a specified value to the end of the Set.
        - delete // Removes a specified value from the Set.
        - clear  // Void | Clear Every Thing
        - has (Boolean value)
    }
*/
let mydata = [1, 1, 1, 2, 3];
let myUniqueData = new Set([1, 1, 1, 2, 3]).add(6);
console.log(mydata.length);
console.log(mydata[0]);
console.log(myUniqueData[0]); // Undefined Because You Can't Access Set data by index
myUniqueData.add(1).add(1).add(1).add(5); // Updated the values and added 5
myUniqueData.delete(2);
myUniqueData.add("A");
console.log(myUniqueData.has("A"));
console.log(myUniqueData.has("a"));
console.log(myUniqueData.has("a".toUpperCase()));
myUniqueData.add("Eslam");
console.log(myUniqueData); // Set(6)
console.log(myUniqueData.size); // 6
// myUniqueData.clear();
console.log(myUniqueData); // Set(0)
console.log(myUniqueData.size); // 0

//EXAMPLE
const set = new Set();

set.add('apple');
set.add('banana');
set.add('orange');
set.add('apple');

console.log(set.size);

console.log(set.has('banana'));

set.delete('orange');

console.log(set.size);
for (const item of set) {
    console.log(item);
}
