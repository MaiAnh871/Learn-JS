const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(
        `${ROCK}, ${PAPER} or ${SCISSORS}?`,
        ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid selection! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (pChoice = DEFAULT_USER_CHOICE, cChoice) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice === SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WIN
        : RESULT_COMPUTER_WIN;

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return;
    }

    gameIsRunning = true;
    console.log("Game is starting");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;

    if (playerChoice) {
        winner = getWinner(playerChoice, computerChoice);
    } else {
        winner = getWinner(computerChoice);
    }

    let message = `You picked ${
        playerChoice || DEFAULT_USER_CHOICE
    }, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + "had a draw";
    } else if (winner === RESULT_PLAYER_WIN) {
        message = message + "won.";
    } else {
        message = message + "lost";
    }
    alert(message);
    gameIsRunning = false;
});

// Not related to the game above
const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => (isNaN(number) ? 0 : number);

    let sum = 0;
    for (const num of numbers) {
        if (operation === "ADD") {
            sum += validateNumber(num);
        } else if (operation === "SUBTRACT") {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};

// const subtractUp = function (resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum -= num;
//     }
//     return resultHandler(sum);
// };

const showResult = (messageText, result) => {
    alert(messageText + " " + result);
};

combine(
    showResult.bind(this, "The result after adding all numbers is: "),
    "ADD",
    1,
    5,
    10,
    "asd",
    6,
    10
);
combine(
    showResult.bind(this, "The result after subtracting all numbers is: "),
    "SUBTRACT",
    1,
    5,
    10,
    -3,
    6,
    10
);
