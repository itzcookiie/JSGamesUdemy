const player1 = document.querySelector('.player-1'),
player2 = document.querySelector('.player-2'),
results = document.querySelector('.results'),
btn = document.querySelector('button');

const dicePattern = {
    1: [0],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
}

function colourDice(DOMPoints, score) {
    DOMPoints
    .filter((DOMPoint,index) => dicePattern[score].some(point => point === index))
    .forEach(DOMPoint => DOMPoint.classList.add('active'))
}

btn.addEventListener('click', e => {
    const computerRoll = randomNumberGenerator();
    const playerRoll = randomNumberGenerator();

    const player1DicePoints = [...player1.querySelector('.dice').children];
    const player2DicePoints = [...player2.querySelector('.dice').children];

    resetGame(player1DicePoints, player2DicePoints)

    colourDice(player1DicePoints, playerRoll);
    colourDice(player2DicePoints, computerRoll);

    let outcome = '';

    if(playerRoll > computerRoll) {
        outcome = 'Player 1 Wins!';
    } else if(playerRoll < computerRoll) {
        outcome = 'Computer Wins!';
    } else {
        outcome = 'Draw';
    }
    results.innerText = outcome;
})

function randomNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
}

function resetGame(p1Points, p2Points) {
    [p1Points, p2Points].forEach(playerPoints => playerPoints.forEach(point => point.classList.remove('active')));
}