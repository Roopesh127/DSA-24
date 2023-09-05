// Question ->  Write a program to check the Leap & Non Leap year 

function leepyear(x) {
    if (x % 4 == 0) {
        return "Leep Year";
    }
    return "Not Leep Year"
}
console.log(leepyear(2024))