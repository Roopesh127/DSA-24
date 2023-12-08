// Example 1:
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// Example 2:
// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".

// Example 3:
// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.



// 1. check 'number' is odd ? : ->         o/t =>'number'

var num;
function largestOdd(num){
    var num1 = +num;
    if(num1 % 2 !== 0){
        return num1;
    }
    // else if(num1 % 2 === 0 && (num1.toString().includes("5") )){
    //     return " ";
    // }
    else if(num1 % 2 === 0 && (
        {let num2 = num1.split(" ")
          while(num2.length>0){

          }
        })){
            return " ";
        }

    else{
      
    }

}
console.log(largestOdd("35"))