// Question - To find longest word from a string using custom code
// const w = " Helllo guys how are you";

function longestword(w) {
    let splited = w.split(' ')
    let longest = "";
    for (let i = 0; i < splited.length; i++) {

        if (splited[i].length > longest.length) {
            // console.log(splited[i], longest)

            longest = splited[i];
        }
    }
    // console.log({ longest })
    return longest;
    // console.log(splited)
}
console.log(longestword("Helllo guyuus how are you"))