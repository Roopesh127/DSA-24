// ENTER NUMBER IS PRIME OR NOT

function primenumber(x) {
    if (x <= 1) {
        return " pime number should be greater than 1 "
    }
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return "not a prime number";
        }
    }
    return "prime number";
}
console.log(primenumber(9))