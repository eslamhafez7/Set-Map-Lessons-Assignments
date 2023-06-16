/*
    Set vs WeakSet And Garbage Collector L124 
    The weakSet is weak,
    Meaning references to objects in aweakSet are held weakly
    If no other references to an object stored in the weakSet exist,
    those objects can be grabage collected.

    - Set => Can store any data values
    - weakSet => Collection of objects only

    - Set => Have size property
    - weakSet => Does not have size property

    - Set => Have keys, values, entries
    - weakSet => Does not have clear(), keys, values, entries

    - Set => Can use forEach
    - weakSet => Can't use forEach
    - iterable => متوقعه
    - entries => ادخالات
    - alias => الاسم المستعار
    - iteration => Loop => تكرار
*/

// Type Of Data 
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(typeof Set);
console.log(mySet);
console.log(mySet.has("A"));
// Size
console.log(`Size Is ${mySet.size}`);
// Values + Keys (Alias)
let myIterator = mySet.values();
console.log(mySet.keys());

console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next());

//forEach
mySet.forEach((e) => console.log(e));


console.log("#".repeat(20));

// Type Of Data 

let ws = new WeakSet([{A: 1, B: 2, C: "A"}]);
console.log(typeof WeakSet);
console.log(ws.has(1));
console.log(ws);

/* weakSet Use Cases
    1 - The main use case for WeakSet is when you want to store a collection
    of objects but you don't want those objects to prevent garbage collection 
    when they are no longer used or referenced elsewhere in your code. 
*/

// Managing DOM element references: 
const elements = new WeakSet();
const element = document.getElementById('myElement');
elements.add(element);
console.log(elements.has(element));
element.parentNode.removeChild(element);
console.log(elements.has(element));

// Caching objects:
const cache = new WeakSet();

function getCachedData(data) {
    if (cache.has(data)) {
        return 'Data found in cache';
    } else {
    const result = 'Result of expensive operation';
    cache.add(data);
        return result;
    }
}

const obj1 = { id: 1 };
const obj2 = { id: 2 };


console.log(getCachedData(obj1)); 
console.log(getCachedData(obj1));
console.log(getCachedData(obj2));


// Tracking object presence:
const subscribers = new WeakSet();

function subscribe(callback) {
    subscribers.add(callback);
}

function unsubscribe(callback) {
    subscribers.delete(callback);
}

function notifySubscribers() {
    subscribers.forEach(callback => callback());
}
const subscriber1 = () => console.log('Subscriber 1');
const subscriber2 = () => console.log('Subscriber 2');
