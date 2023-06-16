/*
    [Map Data Type Vs Object] L125

    Map {
        The Map data type is specifically designed for key-value mappings,
        offering better support for ordered iteration,flexible key types, and
        built-in methods for managing entries. 
    }

    Object {
        Objects in JavaScript provide a more versatile data structure with 
        additional features, but they may be less efficient for large-scale
        operations involving frequent modifications of entries. Consider the
        specificrequirements of your use case when choosing between Map and Object.
    }

    [Syntax: new Map(Iterable with key/value)]

    [Comparison:Comparison:]
    
    -  Map => Does not conytain key by default
    - Object => Has default keys

    - Map => Key can be anything [Function, Object, Prmitive Data Types]
    - Object => Sting Or Sympol

    - Map => Ordered by insertion 
    - Object => Not 100% 

    - Map => Get items by size 
    - Object => Need to do manually
    - Map => Can be directly iterated => [Loop]
    - Object => Not directly and need to use Object.keys() and so on

    - Map => Better performance when add or remove data
    - Object => Low performance when comparing with Map
*/
// How to get object item's keys

let obj = {
    name: "Eslam",
    age: 20,
    title: "Developer",
    color: "Black",
    t1: "Developer",
    t2: "Developer",
    t3: "Developer",
    t4: "Developer",
    t5: "Developer",
};
const objectLength = Object.keys(obj).length;
console.log(objectLength);


let myObject = {};
let myMap = new Map();
let myEmptyObject = Object.create(null);
console.log(myObject);
console.log(myMap);
console.log(myEmptyObject);


// Object 
let myNewObject = {
    10: "Number",
    "10": "String",
};
let len = Object.keys(myNewObject).length;
console.log(len); // Note that the length is one because "10" overided 10 number;

console.log(myNewObject); // "10": "String"
console.log(myNewObject[10]); // String

console.log("#".repeat(30));
// Map 
// Use set() to add values to the Map()
// Use get() to get data from Map()
let myNewMap = new Map();

myNewMap.set(20, "Developer");
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set({A: 100, B: 200, C: 300}, "Object");
myNewMap.set(function hbda() {}, "Function");

console.log(myNewMap.get(20)); // Developer
console.log(myNewMap.get(10)); // Number
console.log(myNewMap.get("10")); // String
console.log(myNewMap.has("10"));
console.log(myNewMap.size); // 5
console.log(myNewMap);
console.log(myNewMap.entries()); // MapIterators

console.log(myNewObject); // one value
console.log(myNewMap); // five values