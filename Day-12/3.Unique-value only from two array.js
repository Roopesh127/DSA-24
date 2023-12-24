// Unique values only from 2 arrays i.e. union values
// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output => [1, 2, 3, 4, 5, 6, 7, 8];

function UniqueValue(arr1,arr2){
    let Union = arr1.concat(arr2);
    let Unique = [];
    Union.forEach(element=>{
        if(!Unique.includes(element)){
            Unique.push(element)
        }
    });
    console.log(Unique)

}
UniqueValue([1, 2, 3, 4, 5, 1],[1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]);