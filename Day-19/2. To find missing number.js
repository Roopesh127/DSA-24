// To find all the missing numbers from an array
// const input = [1, 2, 6];

// Output = [3, 4, 5];

function MissingNumbers(arr){
   let min = 1;
   let max = 1;
   for(let i=0;i<arr.length;i++){
      if(arr[i]<min){
         min = arr[i];
      }
      if(arr[i]>max){
         max = arr[i]
      }
   }
   // console.log(min,max)
   let blank = [];
   for(let j = min;j<max;j++){
      if(!arr.includes(j)){
         blank.push(j)
      }
   }
   console.log(blank)
}
MissingNumbers([1, 2, 6])


// const findMissing = num => {
//    const max = Math.max(...num); 
//    const min = Math.min(...num); 
//    const missing = []
 
//    for(let i=min; i<= max; i++) {
//      if(!num.includes(i)) { 
//        missing.push(i); 
//      }
//    }
//    return missing;
//  }
 
//  findMissing([1,15]);