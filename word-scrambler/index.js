const words = ['games', 'html', 'css', 'javascript', 'react'];

document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('.output'),
    input = document.querySelector('input'),
    button = document.querySelector('button');
    let word;
    let scrambledWord;
    let gameStart = false;

    button.addEventListener('click', () => {
        if(!gameStart) {
            button.innerText = 'Guess';
            input.classList.remove('hide');
            input.value = '';
            word = selectRandomWord();
            scrambledWord = scrambleWord(word);
            output.innerText = scrambledWord;
            gameStart = true;
        } else {
            const guessedWord = input.value;
            if(word === guessedWord) {
                output.innerText = `Correct it was ${word}`;
                button.innerText = 'Start';
                input.classList.add('hide');
                gameStart = false;
            } else {
                output.innerText = `Wrong ${scrambledWord}`
            }
        }
    })
})

function selectRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
    const positions = word.split('').map((letter, index) => index);
    return word.split('').map(letter => {
        const randomNumber = Math.floor(Math.random() * positions.length);
        const randomPosition = positions.splice(randomNumber, 1);
        return word[randomPosition];
    })
    .join('');
}