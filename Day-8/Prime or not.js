// To check if given number is prime or not

function CheckPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(CheckPrime(67280421310721));

function checkPrime(n) {
  if (n < 2) {
    return "Prime Number should be greter than 2 or equal 2";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(17));
