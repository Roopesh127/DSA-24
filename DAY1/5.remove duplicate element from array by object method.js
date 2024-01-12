let arr= [1,2,3,4,5,2,4,1] 
 
function RemoveDuplicate(arr){
    let unique = [];
    for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log(RemoveDuplicate([1,2,3,4,5,2,4,1] ))


//  function RemoveDuplicate(arr){
//     let unique = {};
//     for (let i=0;i<arr.length-1;i++){
//         unique[arr[i]]=true ;
//     }
//     // console.log(unique) 
//     let finalArray = [];
//     for(const i in unique){
//           finalArray.push(i)
//     }
//     console.log(finalArray)

// }
// RemoveDuplicate(arr);