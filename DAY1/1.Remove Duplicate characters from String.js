// Remove Duplicate characters from String
// i/p = "Roopesh"
// o/p = "ropesh"
const str = "roopesh"
function removeDuplicate(){
    let blank = [];
 const arr = str.split('')
 for(let i=0;i<arr.length;i++){
    if(!blank.includes(arr[i])){
        blank.push(arr[i])
    }
 }
 return blank.join('');
}
console.log(removeDuplicate(str))