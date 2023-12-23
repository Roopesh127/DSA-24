// To find only truthy values using filter.
// const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

// Output = ["priya", "ate", 9];

function TruthyValue(arr){
    console.log( arr.filter((filtered)=>filtered) ) 
}
// TruthyValue(["priya", 0, "", false, null, undefined, "ate", NaN, 9])
TruthyValue(["priya", 0, "", false, null, undefined, "ate", NaN, 9])