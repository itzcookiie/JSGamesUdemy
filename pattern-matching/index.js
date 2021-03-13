const grid = document.querySelector('.grid');
const button = document.querySelector('button');

const colours = ['red', 'blue', 'green', 'yellow'];
let computerSequence = [];
let userSequence = [];
let playerTurn = false;
let computerTurn = true;
let numOfSequences = 2;

button.addEventListener('click', () => {
    if(computerTurn) randomSequence();
    if(playerTurn) {
        const computerSequenceColours = computerSequence.map(cs => cs.colour);
        const match = userSequence.every((us,index) => computerSequenceColours[index] === us);
        userSequence = [];
        computerSequence = [];
        if(match) {
            numOfSequences++;
            randomSequence();
        } else {
            randomSequence();
        }
    }
})

function generateGrid() {
    colours.forEach(generateGridSquare)
}

function generateGridSquare(colour) {
    const div = document.createElement('div');
    div.style.backgroundColor = colour;
    div.classList.add('grid-square');
    div.id = colour
    div.addEventListener('click', () => {
        if(playerTurn && !computerTurn) {
            highlightSquare(div);
            userSequence.push(colour);
        }
    })
    grid.appendChild(div);
}

function randomSequence() {
    let lastPicked = null;
    for(let i = 0; i < numOfSequences; i++) {
        let colourChoices = colours;
        if(lastPicked) {
            colourChoices = colours.filter(colour => colour !== lastPicked);
        }
        const randomNumber = Math.floor(Math.random() * colourChoices.length);
        const randomColour = colourChoices[randomNumber];
        lastPicked = randomColour;
        computerSequence.push({
            colour: randomColour,
            element: document.getElementById(randomColour)
        });
    }
    runSequence(computerSequence);
}

function runSequence(sequence) {
    sequence.forEach((s,index) => {
        setTimeout(() => {
            s.element.style.opacity = 1;
            setTimeout(() => {
                s.element.style.opacity = 0.5;
                if(index === sequence.length - 1) {
                    computerTurn = false;
                    playerTurn = true;
                }
            }, 500)
        }, (index+1)*500)
    })
}

function highlightSquare(element) {
    element.style.opacity = 1;
    setTimeout(() => {
        element.style.opacity = 0.5;
    }, 500)
}

generateGrid()