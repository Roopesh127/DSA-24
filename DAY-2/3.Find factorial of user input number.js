// Find factorial of user input number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// Get user input
var user_input = parseInt(prompt("Enter a number:"));
// Calculate and display the factorial
var result = factorial(user_input);
console.log("The factorial of " + user_input + " is " + result);
