function signCheck(num1, num2, num3) {

    let counter = 0;

    if (num1 < 0) {
        counter++;
    } if (num2 < 0) {
        counter++;
    } if (num3 < 0) {
        counter++;
    } if (counter % 2 === 0) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}
signCheck(5, 12, -15);