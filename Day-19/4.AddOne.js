// Create a new array by adding one to each elements of the existing array
// const input = [1, 2, 3, 4];

// Output  => [2, 3, 4, 5];

function AddOne(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]+1);
    }
}
AddOne([1,2,3,4,5])