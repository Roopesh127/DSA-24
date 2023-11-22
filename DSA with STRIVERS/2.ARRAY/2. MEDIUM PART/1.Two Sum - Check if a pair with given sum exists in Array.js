// Check if a pair with given sum exists in Array
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function findSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
      
    }
}
    return null;
}
console.log(findSum([3,0,0,3,2,4], 5))

// var twoSum = function(nums, target) {
//     let mp = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i]

//         if (mp.has(diff)) {
//             return [i, mp.get(diff)]
//         }

//         mp.set(nums[i], i)
//     }
// };
