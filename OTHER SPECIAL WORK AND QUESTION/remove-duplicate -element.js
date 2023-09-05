// - Remove duplicate elements from the Array - [1,2,3,4,1,2,3,4,5,8,9,6,4,4,2,1]

function removeduplicate(arr) {
    let blankarr = [];
    for (let neww of arr) {
        if (!blankarr.includes(neww)) {
            blankarr.push(neww);
        }
    }
    return blankarr;
}
console.log(removeduplicate([1, 1, 1, 1, 2, , 2, 3, 4, 3, 4, 3, 3, 44, 5, 5, 6, 5, 2, 2, 4]))