
// var arr = ["madam"];
function palindrome(y) {
    var x = y.toLowerCase();
    let store = ""
    for (let i = x.length - 1; i >= 0; i--) {
        store = store + x[i]
    }
    if (store == x) {
        console.log("palindrome");
    }
    else {
        console.log("not palindrome")
    }


}
palindrome("Madam")