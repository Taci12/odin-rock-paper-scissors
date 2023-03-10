const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const scoreDiv = document.querySelector('#score-div');
const outcomeDiv = document.querySelector('#outcome-div');
const computerScoreP = document.querySelector('#computerScoreP');
const userScoreP = document.querySelector('#userScoreP');
let p = document.createElement('p');
outcomeDiv.appendChild(p);
let computerScore = 0;
let userScore = 0;


function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let number = Math.floor(Math.random() * 3);
    return choices[number];
}

function updateScores(userScore, computerScore) {
    userScoreP.innerText = `Your score: ${userScore}`;
    computerScoreP.innerText = `Computer score: ${computerScore}`;
}

function playRound(userChoice, computerChoice) {
    p.innerText = ' ';
    if (computerChoice === userChoice) {
        p.innerText = `Tie! Both picked ${userChoice}`;
    } else if ((userChoice === 'Rock') && (computerChoice === 'Paper')) {
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        computerScore++;
    } else if ((userChoice === 'Rock') && (computerChoice === 'Scissors')) {
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        userScore++;
    } else if ((userChoice === 'Paper') && (computerChoice === 'Scissors')) {
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        computerScore++;
    } else if ((userChoice === 'Paper') && (computerChoice === 'Rock')) {
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        userScore++;
    } else if ((userChoice === 'Scissors') && (computerChoice === 'Rock')) {
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        computerScore++;
    } else if ((userChoice === 'Scissors') && (computerChoice === 'Paper')) {
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        userScore++;
    }
    console.log(`Computer: ${computerScore}`);
    console.log(`User: ${userScore}`);
    checkWinner();
}

rockButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('Rock', computerChoice);
    updateScores(userScore, computerScore);
});

paperButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('Paper', computerChoice);
    updateScores(userScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('Scissors', computerChoice);
    updateScores(userScore, computerScore);
});

function checkWinner() {
    updateScores(userScore, computerScore);
    if (computerScore === 5) {
        let h3 = document.createElement('h3');
        h3.innerText = `Too bad! Computer won ${computerScore} to ${userScore}`;
        h3.style.color = 'red';
        outcomeDiv.appendChild(h3);
        computerScore = 0;
        userScore = 0;
    } else if (userScore === 5) {
        let h3 = document.createElement('h3');
        h3.innerText = `Congratulations! You won ${userScore} to ${computerScore}`;
        h3.style.color = 'green';
        outcomeDiv.appendChild(h3);
        computerScore = 0;
        userScore = 0;
    };
};

