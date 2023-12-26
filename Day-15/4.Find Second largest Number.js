// To find the second largest number in an array

// input = [1,2,3,4,5,6,7,5,6,3,4,8,5]  
// output = 7

function SecondLargest(arr){
   let sorted = arr.sort();
   for(let i=0;i<sorted.length-2;i++){
   }
   console.log(sorted[sorted.length-2])

}
SecondLargest([1,2,3,4,5,6,7,5,6,3,4,8,5])