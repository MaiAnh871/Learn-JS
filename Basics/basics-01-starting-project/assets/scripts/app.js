const defaultResult = 0;

let currentResult = defaultResult;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage =  'An error \n' + 
                    'occurred!';

currentResult = (currentResult + 10) * 3 / 2 - 1;

outputResult(currentResult, errorMessage);