/*
    [Map And Set Challenge] L133
*/
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * [...n1, ...n2].length);

 // 30 * n1,n2.length = 7  === 210 