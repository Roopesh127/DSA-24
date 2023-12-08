// Example 1:
// Input: ”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: "This is decent”
// Output: “decent is This”


// NOTE :- This question you must run on leetcode beacause there is some more test case inside it.
// and must run it.

var arr;
function ReverseIndividually(arr){
    let new1 = [];
   let splitarr = arr.split(" ");
       while(splitarr.length>0){
        let poparr = splitarr.pop();
        let pusharr = new1.push(poparr);
       }
       return new1.join(" ");
}
console.log(ReverseIndividually("This is decent"));


// var arr = "this is an amazing program";
// function ReverseIndividually(){
//     let new1 = [];
//    let splitarr = arr.split(" ").reverse().join(" ");
//        return splitarr;
// }
// console.log(ReverseIndividually(arr));


