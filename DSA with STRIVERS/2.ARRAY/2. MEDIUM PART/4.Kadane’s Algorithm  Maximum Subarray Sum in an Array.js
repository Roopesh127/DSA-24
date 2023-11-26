// Problem Statement: - 

// Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Example 1:
// Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 
// Output: 6 
// Explanation: [4,-1,2,1] has the largest sum = 6. 

// Examples 2: 
// Input: arr = [1] 
// Output: 1 
// Explanation: Array has only one element and which is giving positive sum of 1.


function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // subarray = arr[i.....j]
            let sum = 0;

            //add all the elements of subarray:
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log(`The maximum subarray sum is: ${maxSum}`);
