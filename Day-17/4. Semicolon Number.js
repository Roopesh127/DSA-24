// 12345;
// 2345;
// 345;
// 45;
// 5;

// Ignore Semicolons
function NumberPrint(n) {
    let print = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            print += j;
        }
        if (i !== n) {
            print += "\n";
        }
    }
    console.log(print);
}

NumberPrint(5);
