const defaultResult = 0;

let currentResult = defaultResult;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = "An error \n" + "occurred!";

function add(num1, num2) {
    const result = num1 + num2;
    alert("The result was " + result);
}

add(1, 2);
add(2, 3);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

outputResult(currentResult, calculationDescription);
