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

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;

    if (
        (operation !== "add" &&
            operation !== "subtract" &&
            operation !== "multiply" &&
            operation !== "divide") ||
        !enteredNumber
    ) {
        return;
    }

    if (operation === "add") {
        currentResult += enteredNumber;
        operator = "+";
    } else if (operation === "subtract") {
        currentResult -= enteredNumber;
        operator = "-";
    } else if (operation === "multiply") {
        currentResult *= enteredNumber;
        operator = "*";
    } else if (operation === "divide") {
        currentResult /= enteredNumber;
        operator = "/";
    }

    createAndWriteLog(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

// function add() {
//     calculateResult("add");
// }

// function subtract() {
//     calculateResult("subtract");
// }

// function multiply() {
//     calculateResult("multiply");
// }

// function divide() {
//     calculateResult("divide");
// }

/* Test comments */
addBtn.addEventListener("click", calculate.bind(this, "add"));
subtractBtn.addEventListener("click", calculate.bind(this, "subtract"));
multiplyBtn.addEventListener("click", calculate.bind(this, "multiply"));
divideBtn.addEventListener("click", calculate.bind(this, "divide"));
