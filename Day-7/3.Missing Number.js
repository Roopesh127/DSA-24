// Find the missing number from an array

function MissingNumber(arr){
    for(let i=0;i<=arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            // if((arr[j] - arr[i]) > 1){
            //     return "there is missing number";
            // }
            // else {
            //     return "there is no missing Number";
            // }
            console.log(arr[i])
        }
    }
}
console.log(MissingNumber([1,2,3,4,5,6,7,8]));