// Remove Duplicate characters from String
// i/p = "Roopesh"
// o/p = "ropesh"
 
function RemoveDuplicate(str){
    let arr = str.split("")
    let blank = [];
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        if(!blank.includes(arr[i])){
            blank.push(arr[i]);
        }
    }
    return final = blank.join("");
}
console.log(RemoveDuplicate("Roopesh"))










// const str = "roopesh"
// function removeDuplicate(){
//     let blank = [];
//  const arr = str.split('')
//  for(let i=0;i<arr.length;i++){
//     if(!blank.includes(arr[i])){
//         blank.push(arr[i])
//     }
//  }
//  return blank.join('');
// }
// console.log(removeDuplicate(str))