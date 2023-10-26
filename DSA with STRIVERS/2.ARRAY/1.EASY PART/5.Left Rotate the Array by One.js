// Left Rotate the Array by One
// k = 3
// output = [5,6,7,1,2,3,4]

const arr = [1,2,3,4,5,6,7]
function leftRotate(arr,k){
    let spliced = arr.splice(0,arr.length - (k-1))
    const merged =  arr.concat(spliced)
    return merged
}
console.log(leftRotate(arr,3))
