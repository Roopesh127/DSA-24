// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.
const arr = [1, 2, 3, 4, 5]
function neww(arr) {
    let r = arr.splice(0, 3).reverse();
    // let s = arr.slice(0).reverse();
    let s = arr.reverse();
    let p = [...r, ...s]
    console.log(p);
    // console.log(s);

}
return neww(arr)