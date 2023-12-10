// Create a function to remove duplicate elements from an array.

function Duplicate(arr){
    new1 = [];
    for(let i = 0; i<arr.length;i++){
        if(!new1.includes(arr[i])){
            new1.push(arr[i])
        }
    }
    return new1;
}
console.log(Duplicate([1,2,3,1,4,2,64,3,3]))