// Write a program to find the Palindrome of the string

// - Find for single word
// - Find the longest from the string
// - Find the smallest from the string

function palindrome(x) {

    for (let i = 0; i < x.length - 1; i++) {
        x[i];

        for (let j = x.length - 1; j >= 0; j--) {
            x[j];

            if (x[i] === x[j]) {
                console.log("palindrome");
            }
            else {
                console.log("not a plindrome")
            }
        }
    }
}
console.log(palindrome("naman"));

// function palindrome(x){
// for (let i = 0; i<x.length-1;i++)
// var one = x[i]
// for(let j =x.length-1 ; j>=0;j-- )
// var two = x[j]
// if(one === two){
//     console.log("palindrome")
// }else(
//    console.log( "not a palindrome")
// )
// }
// console.log(paindrome("naman"))