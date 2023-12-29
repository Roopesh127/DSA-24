// Find first repeating character with its index from an array. 
// You need to tell which element is having the first repetation inside an array.
// const input = [1, 0, 2, 3 , 4, 4, 5, 7, 7];

// output = 4;

function ReapeatElement(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return arr[i];
            }
        }
    }
}
console.log(ReapeatElement([1, 0, 2,1, 3 , 4, 4, 5, 7, 7]));