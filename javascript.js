/*
0 = Rock
1 = Paper
2 = Scissors
*/

function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);
    return numberChoice;
}

function computerChoiceToString(number) {
    if (number == 0) {
        return 'Rock';
    } else if (number == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getUserChoiceString() {
    let userChoiceString;
    let condition = true;
    while (condition) {
        userChoiceString = prompt('Input your choice: ');
        userChoiceString = userChoiceString.toLowerCase();
        if ((userChoiceString == 'rock') || (userChoiceString == 'paper') || (userChoiceString == 'scissors')) {
            !condition;
            return userChoiceString;
        }
    }
}
function userChoiceToNumber(userChoiceString) {
    if (userChoiceString == 'rock') {
        return 0;
    }
    else if (userChoiceString == 'paper') {
        return 1;
    }
    else {
        return 2;
    }
}

function playRound(computerChoice, computerChoiceString, playerChoice, playerChoiceString) {
    if ((computerChoice + 1) == playerChoice) {
        console.log('You win! ' + playerChoiceString + ' beats ' + computerChoiceString + '!');
        return 1;
    } else if ((computerChoice - 1) == playerChoice) {
        console.log('Computer wins! ' + computerChoiceString + ' beats ' + playerChoiceString + '!');
        return -1;
    } else if (computerChoice == playerChoice) {
        console.log('Tie!');
        return 0;
    } else if ((computerChoice - 2) == playerChoice) {
        console.log('You win! ' + playerChoiceString + ' beats ' + computerChoiceString + '!');
        return 1;
    } else {
        console.log('Computer wins! ' + computerChoiceString + ' beats ' + playerChoiceString + '!');
        return -1;
    }
}

function game() {
    let computerChoice, computerChoiceString, userChoiceString, userChoice;
    let userPoints = 0;
    let computerPoints = 0;
    for (i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        computerChoiceString = computerChoiceToString(computerChoice);
        userChoiceString = getUserChoiceString();
        userChoice = userChoiceToNumber(userChoiceString);
        let roundResult = playRound(computerChoice, computerChoiceString, userChoice, userChoiceString);
        if (roundResult == 1) {
            userPoints++;
        } else if (roundResult == -1) {
            computerPoints++;
        }
    }
    if (computerPoints > userPoints) {
        console.log('Computer wins ' + computerPoints + ' to ' + userPoints + '.');
    } else if (userPoints > computerPoints) {
        console.log('User wins ' + userPoints + ' to ' + computerPoints + '.');
    } else {
        console.log('Tie ' + userPoints + ' to ' + computerPoints + '.');
    }
}

game();