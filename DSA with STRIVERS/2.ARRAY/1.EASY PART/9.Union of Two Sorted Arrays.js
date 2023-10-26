// Union of Two Sorted Arrays

// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

arr1 = [1,2,3,4,5,6,7,11]
arr2 = [3,5,4,6,9,11,34]
function sortedUnion(){
    let newsorted = [];
    for(let i=0;i<arr1.length;i++){
        if(!newsorted.includes(arr1[i])){
            newsorted.push(arr1[i])
        } 
    }

    for(let i=0;i<arr2.length;i++){
        if(!newsorted.includes(arr2[i])){
            newsorted.push(arr2[i])
        }
    }
    return newsorted;
} 
console.log(sortedUnion(arr1,arr2))