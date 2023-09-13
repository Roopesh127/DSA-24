const array = [13, 46, 24, 52, 20, 9];
function Bsort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp;
            }


        }
    }
    console.log("sas", array)

}
Bsort(array);