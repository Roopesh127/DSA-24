// Reverse of a number using converting into string with or withour builtin methods
// input = 12345;
// output = 54321;

// 1.---> without inbuilt method

// function Reverse(num){
//     let reversed = "";
// let str = num.toString();
// for(let i=str.length-1;i>=0;i--){
//    reversed += str[i]
// }
// console.log(reversed)

// }
// Reverse(12345)

// 2.-----> With inbuild Method

// function ReverseNumber(num){
//       let convert = num.toString().split("").reverse().join("");
//       console.log(convert)
// }
// ReverseNumber(123456)