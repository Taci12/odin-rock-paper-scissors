/*
0 = Rock
1 = Paper
2 = Scissors
*/

function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice == 0) {
        return 'Rock';
    } else if (numberChoice == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
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

playRound(1, 'Paper', 0, 'Rock');