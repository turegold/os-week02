// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
let odd_scores = scores.filter((x) => x % 2 == 1);
console.log(odd_scores);

let double_scores = odd_scores.map((x) => x*2);
console.log(double_scores);

let sorted_scores = double_scores.sort((a,b) => b - a);
console.log(sorted_scores);

let half_scores = sorted_scores.slice(0,Math.ceil(sorted_scores.length/2));
console.log("result(a):", half_scores);


// (b)
let result = scores.filter((x)=> x % 2 == 1).map((x)=> x*2).sort((a,b)=>b-a).filter((x, i, arr) => i < arr.length/2);
console.log("result(b):", result);

// (c)
console.log("scores: ", scores);
console.log("result(a):", half_scores);
console.log("result(b):", result);

// scores는 그대로 유지된다. (a)와 (b)에서 filter(), map()는 새로운 배열을 생성하기 때문에 원본 배열은 유지된다.