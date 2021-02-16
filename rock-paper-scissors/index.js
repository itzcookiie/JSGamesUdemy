const score = document.querySelector('.score'),
choices = document.querySelector('.choices'),
results = document.querySelector('.results');

const btns = document.querySelectorAll('button');

const hands = ['Rock', 'Paper', 'Scissors'];

const gameScores = {
    playerScore: 0,
    computerScore: 0
};

[...btns].forEach(btn => btn.addEventListener('click', e => {
    const computerChoice = hands[Math.floor(Math.random() * hands.length)];
    const yourChoice = e.target.innerText;

    choices.innerText = `${yourChoice} vs ${computerChoice}`;

    const drawText = 'Draw results in a tie match';
    const playerWinsText = 'Player Wins!';
    const computerWinsText = 'Computer Wins!';

    if(yourChoice === 'Rock' && computerChoice === 'Rock' ||
    yourChoice === 'Paper' && computerChoice === 'Paper' ||
    yourChoice === 'Scissors' && computerChoice === 'Scissors'
    ) {
        results.innerText = drawText;
    }


    if(yourChoice === 'Rock' && computerChoice === 'Scissors' ||
    yourChoice === 'Paper' && computerChoice === 'Rock' ||
    yourChoice === 'Scissors' && computerChoice === 'Paper'
    ) {
        results.innerText = playerWinsText
        gameScores.playerScore++;
    } 

    if(yourChoice === 'Rock' && computerChoice === 'Paper' ||
    yourChoice === 'Paper' && computerChoice === 'Scissors' ||
    yourChoice === 'Scissors' && computerChoice === 'Rock'
    ) {
        results.innerText = computerWinsText;
        gameScores.computerScore++;
    } 

    score.innerText = `Player[${gameScores.playerScore}] Computer [${gameScores.computerScore}]`
}))