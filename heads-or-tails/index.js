const results = document.querySelector('.results'),
outcome = document.querySelector('.outcome'),
score = document.querySelector('.score');

const btns = document.querySelectorAll('button');

const choices = ['Heads', 'Tails'];

const gameScore = {
    playerScore: 0,
    computerScore: 0
};

[...btns].forEach(btn => {
    btn.addEventListener('click', e => {
        const randomGuess =  choices[Math.floor(Math.random() * choices.length)];
        results.innerText = `Computer selected ${randomGuess}`
        if(randomGuess === e.target.id) {
            outcome.innerText = 'Player Wins';
            gameScore.playerScore++
        } else {
            outcome.innerText = 'Computer Wins';
            gameScore.computerScore++
        }
        score.innerText = `Player ${gameScore.playerScore} Computer ${gameScore.computerScore}`
    })
});