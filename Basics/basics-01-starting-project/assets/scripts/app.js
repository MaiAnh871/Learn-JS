const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Write a log for all operation functions
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(resultBeforeCalc, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog("+", initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog("-", initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog("*", initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog("/", initialResult, enteredNumber);
}

/* Test comments */
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
