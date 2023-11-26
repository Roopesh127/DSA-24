// Problem Statement:
// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
// Note: Start the array with positive elements.

// Example 1:
// Input: - arr[] = {1,2,-4,-5}, N = 4
// Output: - 1 -4 2 -5
// Explanation: 
// Positive elements = 1,2
// Negative elements = -4,-5
// To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

// Example 2:
// Input: - arr[] = {1,2,-3,-1,-2,3}, N = 6
// Output: ->  1 -3 2 -1 3 -2
// Explanation: 
// Positive elements = 1,2,3
// Negative elements = -3,-1,-2
// To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
// Also, -3 should come before -1, and -1 should come before -2.


// Example 3:
// Input: arr[] = {4, -3, 6, -7, 2, -8}, N = 6
// Output: 4 -3 6 -7 2 -8
// Explanation:
// Positive elements = 4, 6, 2
// Negative elements = -3, -7, -8
// To maintain relative ordering, 4 must occur before 6, and 6 must occur before 2. Also, -3 should come before -7, and -7 should come before -8.


// Example 4:
// Input: arr[] = {-1, -2, -3, -4, 5, 6, 7, 8}, N = 8
// Output: 5 -1 6 -2 7 -3 8 -4
// Explanation:
// Positive elements = 5, 6, 7, 8
// Negative elements = -1, -2, -3, -4
// To maintain relative ordering, 5 must occur before 6, and 6 must occur before 7. Also, -1 should come before -2, and -2 should come before -3. 7 should come before 8, and -3 should come before -4.


function rearrange(arr){
    let posit = [];
    let negt = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            posit.push(arr[i])
        }
        else{
            negt.push(arr[i])
        }
    }
    
    let new1 =[]
    for(let r=0;r<posit.length;r++){
        const k = negt.length
        for(let s =0;s<k;s++){
            let s1 =posit.shift()
          new1.push(s1)
            let s2 =negt.shift()
            new1.push(s2)
        }
    }
    return new1;
}
console.log(rearrange([-1, -2, -3, -4, 5, 6, 7, 8]))