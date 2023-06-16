/*
    [Map Assignment 3]
*/
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

// let myMap = new Map(Object.entries(myInfo));
let map = new Map(Object.entries(myInfo));
console.log(map);
console.log(map.size);
console.log(map.has("role"));

//DONE