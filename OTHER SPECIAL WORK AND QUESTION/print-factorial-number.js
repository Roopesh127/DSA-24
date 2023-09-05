function factorialnumberof(x) {
    if (x == 0) {
        return " 0 factorial is always 1"
    }
    let multiply = 1;
    for (let i = 1; i <= x; i++) {
        multiply = multiply * i;
    }
    return multiply;
}
console.log(factorialnumberof(7))