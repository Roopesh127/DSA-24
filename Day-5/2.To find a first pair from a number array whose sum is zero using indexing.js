// To find a first pair from a number array whose sum is zero using indexing
function firstPairWithIndices(arr) {
    const indices = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = -arr[i];

        if (indices[complement] !== undefined) {
            return [indices[complement], i];
        }

        indices[arr[i]] = i;
    }

    return [];
}

// Example usage
const result = firstPairWithIndices([1, 2, -1, 3, -3, 5, 6, 7]);
console.log(result); // Output: [2, 5]
