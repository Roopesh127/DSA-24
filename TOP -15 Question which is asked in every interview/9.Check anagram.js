// Write a function to check if two strings are anagrams of each other.

// function anagram(n1, n2) {
//   let r = String(n1).split("").sort().join("");
//   let s = String(n2).split("").sort().join("");
//   if (r === s) {
//     console.log("anagram");
//   } else {
//     console.log("not anagram");
//   }
// }
// anagram(123, 321);

//
//
//
//

// function Anagram(n) {
//   let splited = String(n).split("");
//   let new1 = [];
//   for (let i = splited.length - 1; i >= 0; i--) {
//     new1.push(splited[i]);
//   }
//   new1 = new1.join("");
//   if (new1 === String(n)) {
//     return "anagram";
//   } else {
//     return "not a anagram";
//   }
// }
// console.log(Anagram(123));
