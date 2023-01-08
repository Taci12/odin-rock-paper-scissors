const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const scoreDiv = document.querySelector('#score-div');
const outcomeDiv = document.querySelector('#outcome-div');

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let numberChoice = Math.floor(Math.random() * 3);
    return choices[number];
}

function playRound(userChoice, computerChoice) {
    if (computerChoice === userCoice) {
        let p = document.createElement('p');
        p.innerText = `Tie! Both picked ${userChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Rock') && (computerChoice === 'Paper')) {
        let p = document.createElement('p');
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Rock') && (computerChoice === 'Scissors')) {
        let p = document.createElement('p');
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Paper') && (computerChoice === 'Scissors')) {
        let p = document.createElement('p');
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Paper') && (computerChoice === 'Rock')) {
        let p = document.createElement('p');
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Scissors') && (computerChoice === 'Rock')) {
        let p = document.createElement('p');
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Scissors') && (computerChoice === 'Paper')) {
        let p = document.createElement('p');
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
    }
}

rockButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('Rock', computerChoice);
});

paperButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('Paper', computerChoice);
});

scissorsButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('Scissors', computerChoice);
});