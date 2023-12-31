const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

// const enteredValue = prompt("Maximum life for you and the monster.", "100");

// let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

function getMaxLifeValue() {
    const enteredValue = prompt("Maximum life for you and the monster.", "100");

    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: "Invalid user input, not a number!" };
    }
    return parsedValue;
}
// if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
//     chosenMaxLife = 100;
// }
let chosenMaxLife;
try {
    chosenMaxLife = getMaxLifeValue();
} catch (error) {
    console.log(error);
    alert("You entered something wrong, please try again!");
} finally {
    
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = "MONSTER";
            break;

        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER";
            break;

        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = "PLAYER";
            break;

        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = "PLAYER";
            break;

        case LOG_EVENT_GAME_OVER:
            logEntry.target = "GAME OVER";
            break;

        default:
            break;
    }

    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife === true) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert("You would be dead but the bonus life saves you!");
        setPlayerHealth(currentPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "PLAYER WON",
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "A DRAW",
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("You have a draw!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "MONSTER WON",
            currentMonsterHealth,
            currentPlayerHealth
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent =
        mode === MODE_ATTACK
            ? LOG_EVENT_PLAYER_ATTACK
            : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function attackHandler() {
    attackMonster("ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}

function printLogHandler() {
    let j = 0;
    outerWhile: do {
        console.log("Outer", j);
        innerFor: for (let k = 0; k < 5; k++) {
            if (k == 3) {
                break outerWhile;
            }
            console.log("Inner", k);
        }
        j++;
    } while (j < 3);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
