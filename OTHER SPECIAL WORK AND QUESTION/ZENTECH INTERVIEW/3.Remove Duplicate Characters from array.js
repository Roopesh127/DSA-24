// i/p = [1,2,3,4,5,3,2,6]
// o/p = [1,2,3,4,5,6]

function RemoveDuplicate(arr){
   let final = [];
   for(let i=0;i<arr.length;i++){
    if(!final.includes(arr[i])){
        final.push(arr[i])
    }
   }
   return final;
}
console.log(RemoveDuplicate([1,2,3,4,5,3,2,6]))