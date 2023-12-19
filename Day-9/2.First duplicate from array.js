// Find first duplicate element from an array
// arr = [1,2,3,3,4,5,4,5]

function FirstDuplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return arr[j]
            }
        }
    }
}
console.log(FirstDuplicate([1,2,3,3,4,5,4,5]))