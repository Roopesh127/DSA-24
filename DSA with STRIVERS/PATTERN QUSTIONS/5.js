// *****
// *****
// *****
// *****
// *****
function state(x) {
    for (let i = 1; i <= x; i++) {
        let row = "";
        for (let j = 1; j <= 5; j++) {
            row = row + "*"
        }
        
        console.log(row)
    }
}
state(5)