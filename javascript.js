/*  0 = ROCK
    1 = SCISSORS
    2 = PAPER
 */

function choiceNumberToEquivalentString (choice) {
    if (choice = 0) {return /Rock/i}
    else if (choice = 1) {return /Scissors/i}
    else {return /Paper/i}
}

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    let stringChoice = choiceNumberToEquivalentString(choice);
    return stringChoice;
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection == /rock/i) && (computerSelection == /scissors/i)) {
        return('You win! ${playerSelection} beats ${computerSelection}!');
    } 
    else if ((playerSelection == /scissors/i) && (computerSelection == /rock/i)) {
        return('Computer wins! ${computerSelection} beats ${playerSelection}!')
    } 
    else if ((playerSelection == /paper/i) && (computerSelection == /rock/i)) {
        return('Player wins! ${playerSelection} beats ${computerSelection}!');
    }
    else if ((computerSelection == /paper/i) && (playerSelection == /rock/i)) {
        return('Computer wins! ${computerSelection} beats ${playerSelection}!');
    }
    else if ((computerSelection == /scissors/i) && (playerSelection == /paper/i)) {
        return('Computer wins! ${computerSelection} beats ${playerSelection}!');
    }
    else {
        return('Player wins! ${playerSelection} beats ${computerSelection}!');
    }
}

console.log(getComputerChoice());