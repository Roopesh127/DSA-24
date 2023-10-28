// Given an array that contains only 1 and 0 return the count of
// maximum consecutive ones in the array.

/* Example :-

Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

Input: prices = {1, 0, 1, 1, 0, 1} 
Output: 2
Explanation: There are two consecutive 1's in the array. */

// const arr = [1,0,0,0,1,1,1,1];
// const arr = [1,1,0,1,1,1];
const arr = [1,0,1,1,0,1]

function consecutive(){
  let occur = 0;
  let maxCount = 0;
  for(let i = 0; i<arr.length;i++){
    if(arr[i] == 1){
        occur++;
        maxCount = Math.max(maxCount, occur);
    }
    else{
        occur = 0;
    }

  }
  return occur;
}
console.log(consecutive(arr))