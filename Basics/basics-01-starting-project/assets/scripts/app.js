const defaultResult = 0;
let currentResult = defaultResult;

let errorMessage = "An error \n" + "occurred!";

function add(num1, num2) {
    const result = num1 + num2;
    // alert("The result was " + result);
    return result;
}

currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
