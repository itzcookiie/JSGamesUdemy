document.addEventListener('DOMContentLoaded', () => {
    const gameMessage = createElement('h4');
    const combinationContainer = createElement('div');
    const checkComboBtn = createElement('button');
    const instruction = createElement('p');
    const fragment = document.createDocumentFragment();

    gameMessage.innerText = 'Guess the combo';
    combinationContainer.innerHTML =
        `
            <input style="font-size: 3rem;" type="number" min="0" max="9" value="0"/>
            <input style="font-size: 3rem;" type="number" min="0" max="9" value="0" />
            <input style="font-size: 3rem;" type="number" min="0" max="9" value="0" />
            <input style="font-size: 3rem;" type="number" min="0" max="9" value="0" />
            <input style="font-size: 3rem;" type="number" min="0" max="9" value="0" />
            <input style="font-size: 3rem;" type="number" min="0" max="9" value="0" />
        `;
    checkComboBtn.innerText = 'Check Combo';
    checkComboBtn.style.padding = '10px';
    instruction.innerText = 'Guess the combo, blue means higher, red means lower';

    let combination = createCombination();

    let guesses = 0;

    checkComboBtn.addEventListener('click', checkCombination);

    function checkCombination(e) {
        if(this.innerText === 'Restart Game') {
            gameMessage.innerText = 'Guess the combo';
            checkComboBtn.innerText = 'Check Combo';
            combination = createCombination();
            guesses = 0;
            [...combinationContainer.children].forEach(input => {
                input.value = 0;
                input.style.backgroundColor = 'white';
            });
            return;
        }
        guesses++;
        gameMessage.innerText = `Guesses ${guesses}`;
        let matchingNumbers = 0;
        [...combinationContainer.children].forEach((input, index) => {
            const enteredValue = +input.value;
            const actualValue = combination[index];
            if(enteredValue === actualValue) {
                input.style.backgroundColor = 'green';
                matchingNumbers++;
            }
             else if(enteredValue > actualValue) {
                 input.style.backgroundColor = 'red';
            }
             else if(enteredValue < actualValue) {
                 input.style.backgroundColor = 'blue';
            }
        })
        if(matchingNumbers === combinationContainer.children.length) {
            gameMessage.innerText = `You solved the combo in ${guesses} guesses`;
            checkComboBtn.innerText = 'Restart Game';
        }
    }

    [gameMessage, combinationContainer, checkComboBtn, instruction].forEach(element => {
        fragment.appendChild(element)
    })

    document.body.appendChild(fragment);

    [...document.body.children].forEach(element => {
        element.style.margin = '10px';
    })
})

function createElement(el) {
    return document.createElement(el)
}

function randomNumber() {
    return Math.floor(Math.random() * 10)
}

function createCombination() {
    return {
        0: randomNumber(),
        1: randomNumber(),
        2: randomNumber(),
        3: randomNumber(),
        4: randomNumber(),
        5: randomNumber(),
    }
}