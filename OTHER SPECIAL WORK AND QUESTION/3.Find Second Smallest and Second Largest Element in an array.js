const arr = [0, -1, 2, -3, 4, 5, 6, 7, 8, 9]
// second smallest is 1.
// second biggest is 8.

function work() {
    let secondSmallest = arr[0];
    let secondLargest = arr[1];
    for (let i = 0; i <= arr.length - 2; i++) {
        if (arr[i] > secondLargest)
            secondLargest = arr[i]

        for (let i = arr.length; i > 0; i--) {
            if (arr[i] < secondSmallest)
                secondSmallest = arr[i]
        }
        console.log(secondSmallest);
    }
    return secondLargest;


}
console.log(work())