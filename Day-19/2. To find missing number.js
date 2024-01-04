// To find all the missing numbers from an array
// const input = [1, 2, 6];

// Output = [3, 4, 5];

function MissingNumber(arr){
    let blank = [];
   for(let i=0;i<arr.length;i++){
      // console.log(arr[i])
     for(let j = i+1;j<=arr.length;j++){
      //   if((arr[j] - arr[i]) > 1){
      //       blank.push(arr[i]+2);
      //   }
     }
   }
   // console.log(blank)
}
MissingNumber([1, 2, 6]);

