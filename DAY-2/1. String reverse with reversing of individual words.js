// Question-1  String reverse with reversing of individual words


// Solution=>
// we want -> ["Roopesh"] => ["h","s","e","p","o","o","r"] =>["hsepoor"]

const str = "roopesh";
function stringreverse(){
    var new1 = '';
    const arr = str.split('');
    for(let i=arr.length-1;i>=0;i--){
         new1 += arr[i];
    }
    return new1;  
}
console.log(stringreverse(str))


// 1. we split an Array.
// 2.reverse whole Array.
// 3. again join it.

// const arr = "roopesh";
// var x = arr.split("").reverse().join();
// console.log(x)