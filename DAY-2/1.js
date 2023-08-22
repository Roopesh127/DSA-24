// Question-1  String reverse with reversing of individual words


// Solution=>
// we want -> ["Roopesh"] => ["h","s","e","p","o","o","r"] =>["hsepoor"]

// 1. we split an Array.
// 2.reverse whole Array.
// 3. again join it.

const arr = "roopesh";
var x = arr.split("").reverse().join();
console.log(x)