// 1. apply loop.
// 2. check inside element this is inside object or not.
// 3. if - avialable -> return -> diff & arr[i]
//    else - obj [arr[i]]


function AddTwo(arr,target){
    let obj = {};
    for(let i=0;i<=arr.length-1;i++){
        let diff = target - arr[i];
        // console.log(diff)
        if(obj.hasOwnProperty(diff)){
            return [diff,arr[i]];
        }
        else{
            obj[arr[i]] = true
        }
    }
}
console.log(AddTwo([3,5,8,9,11],13))










// function Add(arr,target){
//     let obj = {};
//     for(let i = 0; i<=arr.length-1;i++){
//        let diff =  target - arr[i]
//        console.log("out" , diff);
//        if(obj.hasOwnProperty(diff)){
//           return [diff,arr[i]]
//        }
//        else{
//         obj[arr[i]] = true;

//        }
       
//     }
//     // console.log(obj)
// }
// console.log("sttst",Add([2,7,11,15],9))

