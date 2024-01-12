function reverseNumber(number) {
    var revNumber = 0;
    while (number > 0) {
        revNumber = (revNumber * 10) + (number % 10);
        number = number / 10;
    }
    return revNumber;


}
console.log(reverseNumber(123456));
