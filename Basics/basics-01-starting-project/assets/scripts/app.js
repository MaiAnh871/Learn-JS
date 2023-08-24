const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Write a log for all operation functions
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(resultBeforeCalc, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (
        calculationType !== "add" &&
        calculationType !== "subtract" &&
        calculationType !== "multiply" &&
        calculationType !== "divide"
    ) {
        return;
    }

    // if (
    //     calculationType !== "add" ||
    //     calculationType !== "subtract" ||
    //     calculationType !== "multiply" ||
    //     calculationType !== "divide"
    // ) {
    //     return;
    // }

    if (calculationType === "add") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "subtract") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "multiply") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "divide") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }

    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult("add");
}

function subtract() {
    calculateResult("subtract");
}

function multiply() {
    calculateResult("multiply");
}

function divide() {
    calculateResult("divide");
}

/* Test comments */
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
