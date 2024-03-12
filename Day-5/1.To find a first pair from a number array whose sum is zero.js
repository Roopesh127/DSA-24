// To find a first pair from a number array whose sum is zero
// i/p => [1,2,-1,-2,3,5,-7,7]
// o/p => (1,-1)

// function firstPair(arr){
//     var new1 = [];
//    for(let i = 0; i<arr.length;i++){
//     for(let j=i+1 ; j<arr.length;j++){
//         if(arr[i] + arr[j] === 0){
//             new1.push(arr[i],arr[j])
//             return new1;
//         }
//     }
//    }
//    return new1;
// }
// console.log(firstPair([1,2,1,3,-3,5,6,7,-2]))






// To find a first pair from a number array whose sum is zero

const arr = [0,1,2,3,4,-5,-1,-2]

function firstPairofZero(arr){
    
    for(let i = 0;i<arr.length;i++){
        for(let j = 1 ; j<arr.length ; j++){
            if(arr[i]+arr[j] === 0){
                return [arr[i],arr[j]]
            }
        }
    }
    
}
console.log(firstPairofZero(arr))




// ### Find all possible pairs which some is zero.

// const arr = [0,1,2,3,4,-5,-1,-2]

// function firstPairofZero(arr){
//     let pair = []
//     for(let i = 0;i<arr.length;i++){
//         for(let j = 1 ; j<arr.length ; j++){
//             if(arr[i]+arr[j] === 0){
//                 pair.push(arr[i],arr[j])
//             }
//         }
//     }
//     return pair;
// }
// console.log(firstPairofZero(arr))