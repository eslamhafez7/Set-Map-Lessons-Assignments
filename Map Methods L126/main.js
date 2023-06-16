/*
    [Map Methods] L126
    - set
    - get
    - delete
    - clear
    - has
Properties
    - size
*/

// let mymap = new Map();
// mymap.set(10, "Number");
// mymap.set("Elzero", "Web School");

let mymap = new Map([
    [10, "Number"],
    ["Elzero", "Web School"],
    ["Eslam", "Web Developer"],
    [false, "Boolean"],
]);

console.log(mymap);
console.log(mymap.entries());
console.log(mymap.get(10));
console.log(mymap.get("Elzero"));
console.log(mymap.get("Eslam"));
console.log(mymap.get(false));
console.log(mymap.size);
console.log(mymap.delete(10)); // true
console.log(mymap.size);
console.log(mymap.has(10)); // Beacuse yoy deleted it
console.log(mymap.has(false));
console.log(mymap.delete("Elzero"));
console.log(mymap.size);

mymap.clear();
console.log(mymap.size); // 0