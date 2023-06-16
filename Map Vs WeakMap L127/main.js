/*
    [Map Vs WeakMap] L127
    - weak Map allows grab collector to do it's task But Map not

    Map => Key can be anything [object, string, boolen, function]
    weakMap => Can be just object
*/

let muser = {name: "Eslam", age: 21};

let mymap = new Map();
mymap.set(muser, "Object");
muser = null; // Overide the reference now it's stored in mymap.
console.log(mymap);


console.log("#".repeat(30));
let wmueser = {name: "Eslam", age: 21};
let myweakmap = new WeakMap();
myweakmap.set(wmueser, "Object");
wmueser = null
console.log(myweakmap);
