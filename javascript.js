const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const scoreDiv = document.querySelector('#score-div');
const outcomeDiv = document.querySelector('#outcome-div');
const scores = {
    computerScore: 0,
    userScore: 0
};


function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let number = Math.floor(Math.random() * 3);
    return choices[number];
}

function playRound(userChoice, computerChoice, scores) {
    if (computerChoice === userChoice) {
        let p = document.createElement('p');
        p.innerText = `Tie! Both picked ${userChoice}`;
        outcomeDiv.appendChild(p);
    } else if ((userChoice === 'Rock') && (computerChoice === 'Paper')) {
        let p = document.createElement('p');
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        outcomeDiv.appendChild(p);
        scores.computerScore++;
    } else if ((userChoice === 'Rock') && (computerChoice === 'Scissors')) {
        let p = document.createElement('p');
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
        scores.userScore++
    } else if ((userChoice === 'Paper') && (computerChoice === 'Scissors')) {
        let p = document.createElement('p');
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        outcomeDiv.appendChild(p);
        scores.computerScore++;
    } else if ((userChoice === 'Paper') && (computerChoice === 'Rock')) {
        let p = document.createElement('p');
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
        scores.userScore++;
    } else if ((userChoice === 'Scissors') && (computerChoice === 'Rock')) {
        let p = document.createElement('p');
        p.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        outcomeDiv.appendChild(p);
        scores.computerScore++;
    } else if ((userChoice === 'Scissors') && (computerChoice === 'Paper')) {
        let p = document.createElement('p');
        p.innerText = `User wins! ${userChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
        scores.userScore++;
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


function checkWinner(scores, outcomeDiv) {
    if (scores.computerScore === 5) {
        let h3 = document.createElement('h3');
        h3.innerText = `Too bad! Computer won ${scores.computerScore} to ${scores.userScore}`;
        h3.style.color = 'red';
        outcomeDiv.appendChild(h3);
    } else if (scores.userScore === 5) {
        let h3 = document.createElement('h3');
        h3.innerText = `Congratulations! You won ${scores.userScore} to ${scores.computerScore}`;
        h3.style.color = 'green';
        outcomeDiv.appendChild(h3);
    };

};

playGame(scores);
console.log(scores.computerScore);
