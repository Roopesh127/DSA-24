// Implement a function to find the maximum value in an array of numbers.

function MaximumInt(arr){
    if(arr.length === 0){
        return "array is blank"
    }
    
    let max = [0];
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log(max)
}
MaximumInt([1,2,3,4,5,6,5,7,8])


// function MaximumInt(arr){
//     let max = Math.max(...arr);
//     console.log(max);
// }
// MaximumInt([1,2,3,4,5])